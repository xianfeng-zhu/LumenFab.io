import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { zBendPoint, zBendSlope } from "../src/lib/pic-model-geometry.mjs";

const component = await readFile(
  new URL("../src/components/PicChipModel.astro", import.meta.url),
  "utf8"
);

const xScale = 1.5;
const mmiLen = 0.85;
const taperLen = 0.15;
const mmiCombinerCx = (0.5 * 2 + 0.7) * xScale;
const tx2Z = -1.4;
const mziMmiLen = 0.55;
const mziMmiInCx = mmiCombinerCx + 1.35;
const mziMmiOutCx = mziMmiInCx + 1.1;
const mziCenterZ = (tx2Z + 0.4) / 2;
const mziPort1Z = mziCenterZ + 0.15;
const mziPort2Z = mziCenterZ - 0.15;
const combiOutX = mmiCombinerCx + mmiLen / 2 + taperLen;
const mziInputFaceX = mziMmiInCx - mziMmiLen / 2;
const mziOutputFaceX = mziMmiOutCx + mziMmiLen / 2;
const chipLeftX = -5.625;
const chipRightX = 5.625 + 1.2;
const chipCenterX = (chipLeftX + chipRightX) / 2;
const chipLen = chipRightX - chipLeftX;
const substrateViewHalfWidth = chipLen / 2;
const cameraFovDegrees = 42;
const desktopDefaultAspect = 1 / 0.64;
const mobileDefaultAspect = 390 / 400;
const modelXPadding = 0.55;
const expectedDefaultCameraDistance = 13;

const zBends = [
  { startX: combiOutX, startZ: 0.4, endX: mziInputFaceX, endZ: mziPort1Z, y: 0 },
  { startX: combiOutX, startZ: tx2Z, endX: mziInputFaceX, endZ: mziPort2Z, y: 0 }
];

test("PIC MZI input Z-bends are monotonic with horizontal endpoint tangents", () => {
  for (const spec of zBends) {
    let previous = zBendPoint(spec, 0);

    for (let i = 1; i <= 32; i++) {
      const point = zBendPoint(spec, i / 32);
      assert.ok(point.x > previous.x, `x should increase monotonically at sample ${i}`);
      assert.ok(point.x <= spec.endX, `x should not overshoot the MZI input at sample ${i}`);
      previous = point;
    }

    assert.equal(zBendPoint(spec, 0).z, spec.startZ);
    assert.equal(zBendPoint(spec, 1).z, spec.endZ);
    assert.ok(Math.abs(zBendSlope(spec, 0)) < 1e-9);
    assert.ok(Math.abs(zBendSlope(spec, 1)) < 1e-9);
  }
});

test("PIC model connects Z-bends directly to the MZI input MMI face", () => {
  assert.match(component, /const mziInputFaceX = mziMmiInCx - mziMmiLen \/ 2;/);
  assert.match(component, /addZBend\(combiOutX, 0\.4, mziInputFaceX, mziPort1Z\);/);
  assert.match(component, /addZBend\(combiOutX, tx2Z, mziInputFaceX, mziPort2Z\);/);
  assert.doesNotMatch(component, /new THREE\.Vector3\(3\.73, txPathTopY, 0\.4\)/);
});

test("PIC MZI output waveguide uses one output port of the 2x2 MMI", () => {
  assert.equal(mziOutputFaceX, 5.275);
  assert.ok(Math.abs(mziCenterZ + 0.5) < 1e-9);
  assert.notEqual(mziPort1Z, mziCenterZ);
  assert.notEqual(mziPort2Z, mziCenterZ);
  assert.match(component, /const mziOutputFaceX = mziMmiOutCx \+ mziMmiLen \/ 2;/);
  assert.match(component, /const mziMainOutputPortZ = mziPort1Z;/);
  assert.match(component, /const mziUnusedOutputPortZ = mziPort2Z;/);
  assert.match(component, /const outWgStartX = mziOutputFaceX;/);
  assert.match(component, /const outWgZ = mziMainOutputPortZ;/);
  assert.match(component, /const mziUnusedOutputLen = 0\.32;/);
  assert.match(component, /position: \[mziUnusedOutputCx, ribY, mziUnusedOutputPortZ\]/);
  assert.match(component, /position: \[chipRightX - 0\.02, ribY \+ 0\.04, outWgZ\]/);
  assert.doesNotMatch(component, /const outWgZ = mziCenterZ;/);
  assert.doesNotMatch(component, /Output waveguide leaves the MZI output MMI at its centerline/);
  assert.doesNotMatch(component, /position: \[outWgCx, ribY, 0\.4\]/);
  assert.doesNotMatch(component, /position: \[txOutputGcBranchX, ribY, -0\.4\]/);
});

test("PIC model separates MMI multimode regions from full-etch strip waveguides", () => {
  assert.match(component, /\["mmiWaveguide", "#2dd4bf", "MMI 多模区 \(深部分刻蚀\)"\]/);
  assert.match(component, /mmiWaveguide: \{/);
  assert.match(component, /title: "MMI 多模区 \(深部分刻蚀\)"/);
  assert.match(component, /compoundKeys = \{ siDevice: \["stripWaveguide", "ribWaveguide", "mmiWaveguide", "siDevice", "doping"\] \};/);
  assert.match(component, /mmiWaveguide: lSiDevice/);
  assert.match(component, /tagPart\(txMmiSplitter, "mmiWaveguide", false, 4, "mzm"\)/);
  assert.match(component, /tagPart\(txMmiCombiner, "mmiWaveguide", false, 4, "mzm"\)/);
  assert.match(component, /tagPart\(tx2MmiSplitter, "mmiWaveguide", false, 4, "mzm"\)/);
  assert.match(component, /tagPart\(tx2MmiCombiner, "mmiWaveguide", false, 4, "mzm"\)/);
  assert.match(component, /tagPart\(mziInputMmi, "mmiWaveguide", false, 4\)/);
  assert.match(component, /tagPart\(mziOutputMmi, "mmiWaveguide", false, 4\)/);
  assert.doesNotMatch(component, /tagPart\(txMmiSplitter, "stripWaveguide"/);
  assert.doesNotMatch(component, /tagPart\(mziInputMmi, "stripWaveguide"/);
});

test("PIC microring demux uses strip waveguides through ring coupling and drop sections", () => {
  assert.match(component, /const rxRingBusW = 0\.16;/);
  assert.match(component, /const rxRingBusStartX = ringXs\[0\] - 0\.48;/);
  assert.match(component, /const rxRingBusEndX = ringXs\[2\] \+ 0\.48;/);
  assert.match(component, /tagPart\(ringBusWG, "stripWaveguide", false, 5, "microring"\)/);
  assert.match(component, /tagPart\(dwg, "stripWaveguide", false, 4, "microring"\)/);
  assert.match(component, /tagPart\(rxRibBeforeRing, "ribWaveguide", false, 4\)/);
  assert.match(component, /tagPart\(rxRibAfterRing, "ribWaveguide", false, 4\)/);
  assert.doesNotMatch(component, /const ribWG = createBox/);
  assert.doesNotMatch(component, /tagPart\(dwg, "ribWaveguide", false, 4, "microring"\)/);
});

test("PIC through-port Ge detector sits at the end of the RX main waveguide", () => {
  assert.match(component, /const geLen = 0\.7;/);
  assert.match(component, /const geX = ribEndX - geLen \/ 2;/);
  assert.match(component, /size: \[geLen, geH, 0\.35\]/);
  assert.match(component, /position: \[geX, geBaseY \+ geH \/ 2, rxZ\]/);
  assert.match(component, /new THREE\.Vector3\(geX, geBaseY \+ geH, rxZ\)/);
  assert.doesNotMatch(component, /const geX = 3\.0 \* xScale;/);
});

test("PIC model uses slimmer device geometry while preserving connected centerlines", () => {
  assert.match(component, /const ribW = 0\.24;/);
  assert.match(component, /const mmiWidth = 0\.36;/);
  assert.match(component, /const gcN = 7, gcPeriod = 0\.08, gcToothW = 0\.03, gcToothZW = 0\.24;/);
  assert.match(component, /const rxRingBusW = 0\.16;/);
  assert.match(component, /const ringTubeR = 0\.075;/);
  assert.match(component, /const ringDropW = rxRingBusW;/);
  assert.match(component, /const rfElectrodeW = 0\.07;/);
  assert.match(component, /const heaterW = 0\.07;/);
  assert.match(component, /const edgeCouplerW = 0\.44;/);
  assert.match(component, /const dcBusW = 0\.14;/);
  assert.match(component, /const dcTapW = 0\.07;/);
  assert.match(component, /const armWidth = 0\.14;/);
  assert.match(component, /const _bendW = 0\.16;/);
  assert.match(component, /const dopingW = 0\.08;/);
  assert.match(component, /const txInputZBranchLen = Math\.abs\(0\.4 - \(-0\.4\)\) - ribW;/);
  assert.match(component, /const tx2InputZBranchLen = Math\.abs\(tx2Z - tx2GcZ\) - ribW;/);
  assert.match(component, /const rxEcZBranchLen = Math\.abs\(rxEcZ - rxZ\) - ribW;/);
  assert.match(component, /size: \[connLen, siRibH, ribW\]/);
  assert.match(component, /addTaper\(dcApproachStartX, 0\.4, ribW, dcBusW\);/);
  assert.match(component, /addTaper\(mmiCombinerCx \+ mmiLen \/ 2 \+ taperLen \/ 2, 0\.4, mmiWidth, ribW\);/);
});

test("PIC directional coupler monitor tap is slimmer with a clearer coupling gap", () => {
  assert.match(component, /const dcGap = 0\.16;/);
  assert.match(component, /const dcBusW = 0\.14;/);
  assert.match(component, /const dcTapW = 0\.07;/);
  assert.match(component, /const dcCoupledZ = 0\.4 \+ dcBusW \/ 2 \+ dcGap \+ dcTapW \/ 2;/);
  assert.match(component, /const tx2DcCoupledZ = tx2Z - dcBusW \/ 2 - dcGap - dcTapW \/ 2;/);
  assert.match(component, /const hw = dcTapW \/ 2;/);
  assert.match(component, /const tx2DcHw = dcTapW \/ 2;/);
});

test("PIC optical path overlays stay on waveguide centerlines around rings and monitor taps", () => {
  assert.match(component, /new THREE\.Vector3\(rxRingBusStartX, gcTopY, rxZ\)/);
  assert.match(component, /new THREE\.Vector3\(rxRingBusEndX, gcTopY, rxZ\)/);
  assert.doesNotMatch(component, /new THREE\.Vector3\(ringXs\[\d\], gcTopY, rxZ \+ 0\.15\)/);
  assert.match(component, /const dropOpticalGeZ = dropZ \+ dropLen \/ 2 - 0\.04;/);
  assert.match(component, /new THREE\.Vector3\(rx, gcTopY, dropOpticalGeZ\)/);
  assert.doesNotMatch(component, /const geZ = dropZ \+ dropLen \/ 2 \+ dropGeH \/ 2 \+ 0\.04;/);
  assert.match(component, /const mpdPts = dcCoupledPathPts\.slice\(1\)\.map\(\(point\) => new THREE\.Vector3\(point\.x, mpdPathY, point\.z\)\);/);
  assert.match(component, /const tx2MpdPathPts = tx2DcCoupledPathPts\.slice\(1\)\.map\(\(point\) => new THREE\.Vector3\(point\.x, mpdPathY, point\.z\)\);/);
});

test("PIC optical path overlays use segmented centerline curves at branches and bends", () => {
  assert.match(component, /const createOpticalPathCurve = \(points\) => \{/);
  assert.match(component, /curve\.add\(new THREE\.LineCurve3\(points\[i - 1\], points\[i\]\)\);/);
  assert.match(component, /const pathCurve = createOpticalPathCurve\(pathPoints\);/);
  assert.match(component, /const rxEcPathCurve = createOpticalPathCurve\(rxEcPathPoints\);/);
  assert.match(component, /const curve = createOpticalPathCurve\(pts\);/);
  assert.match(component, /const mpdCurve = createOpticalPathCurve\(mpdPts\);/);
  assert.match(component, /const tx2MpdOptCurve = createOpticalPathCurve\(tx2MpdPathPts\);/);
  assert.match(component, /const txGcInCurve = createOpticalPathCurve\(txGcInPathPoints\);/);
  assert.match(component, /const txEdgePathCurve1 = createOpticalPathCurve\(txEdgePathPoints1\);/);
  assert.match(component, /const txEdgePathCurve2 = createOpticalPathCurve\(txEdgePathPoints2\);/);
  assert.match(component, /const txOutGcPathCurve = createOpticalPathCurve\(txOutGcPathPoints\);/);
  assert.match(component, /const tx2GcInCurve = createOpticalPathCurve\(tx2GcInPathPoints\);/);
  assert.match(component, /const tx2EdgeCurve1 = createOpticalPathCurve\(tx2EdgePath1\);/);
  assert.match(component, /const tx2EdgeCurve2 = createOpticalPathCurve\(tx2EdgePath2\);/);
  assert.match(component, /const tx2OutGcCurve = createOpticalPathCurve\(tx2OutGcPathPoints\);/);
  assert.doesNotMatch(component, /const pathCurve = new THREE\.CatmullRomCurve3\(pathPoints\);/);
  assert.doesNotMatch(component, /const rxEcPathCurve = new THREE\.CatmullRomCurve3\(rxEcPathPoints\);/);
  assert.doesNotMatch(component, /const txEdgePathCurve1 = new THREE\.CatmullRomCurve3\(txEdgePathPoints1\);/);
});

test("PIC MZM optical overlays turn at splitter and combiner taper edges", () => {
  assert.match(component, /const mzmSplitterOutputPathPoints = \(baseZ, armZ\) => \[/);
  assert.match(component, /new THREE\.Vector3\(mmiSplitterCx - mmiLen \/ 2 - taperLen, txPathTopY, baseZ\)/);
  assert.match(component, /new THREE\.Vector3\(mmiSplitterCx - mmiLen \/ 2, txPathTopY, baseZ\)/);
  assert.match(component, /new THREE\.Vector3\(mmiSplitterCx \+ mmiLen \/ 2, txPathTopY, baseZ\)/);
  assert.match(component, /new THREE\.Vector3\(taperSplitCx \+ taperLen \/ 2, txPathTopY, armZ\)/);
  assert.match(component, /const mzmCombinerInputPathPoints = \(baseZ, armZ\) => \[/);
  assert.match(component, /new THREE\.Vector3\(taperCombCx - taperLen \/ 2, txPathTopY, armZ\)/);
  assert.match(component, /new THREE\.Vector3\(mmiCombinerCx - mmiLen \/ 2, txPathTopY, baseZ\)/);
  assert.match(component, /new THREE\.Vector3\(mmiCombinerCx \+ mmiLen \/ 2, txPathTopY, baseZ\)/);
  assert.match(component, /new THREE\.Vector3\(combiOutX, txPathTopY, baseZ\)/);
  assert.match(component, /\.\.\.mzmSplitterOutputPathPoints\(0\.4, armZ1\)/);
  assert.match(component, /\.\.\.mzmCombinerInputPathPoints\(0\.4, armZ1\)/);
  assert.match(component, /\.\.\.mzmSplitterOutputPathPoints\(0\.4, armZ2\)/);
  assert.match(component, /\.\.\.mzmCombinerInputPathPoints\(0\.4, armZ2\)/);
  assert.match(component, /\.\.\.mzmSplitterOutputPathPoints\(tx2Z, tx2ArmZ1\)/);
  assert.match(component, /\.\.\.mzmCombinerInputPathPoints\(tx2Z, tx2ArmZ1\)/);
  assert.match(component, /\.\.\.mzmSplitterOutputPathPoints\(tx2Z, tx2ArmZ2\)/);
  assert.match(component, /\.\.\.mzmCombinerInputPathPoints\(tx2Z, tx2ArmZ2\)/);
  assert.doesNotMatch(component, /new THREE\.Vector3\(dopingX, txPathTopY, armZ1\),\s*new THREE\.Vector3\(mmiCombinerCx, txPathTopY, 0\.4\)/s);
  assert.doesNotMatch(component, /new THREE\.Vector3\(dopingX, txPathTopY, tx2ArmZ1\),\s*new THREE\.Vector3\(mmiCombinerCx, txPathTopY, tx2Z\)/s);
});

test("PIC mobile touch gestures keep OrbitControls pinch zoom while desktop wheel uses custom trackpad handling", () => {
  assert.match(component, /controls\.enableZoom = true;/);
  assert.match(component, /controls\.touches\.ONE = THREE\.TOUCH\.ROTATE;/);
  assert.match(component, /controls\.touches\.TWO = THREE\.TOUCH\.DOLLY_PAN;/);
  assert.match(component, /window\.addEventListener\("wheel", wheelHandler, \{ capture: true, passive: false \}\);/);
  assert.match(component, /if \(e\.target !== canvas\) return;/);
  assert.match(component, /if \(e\.ctrlKey\) \{/);
  assert.match(component, /controls\.target\.addScaledVector\(_right, dx\)\.addScaledVector\(_up, dy\);/);
  assert.doesNotMatch(component, /controls\.enableZoom = false;/);
});

test("PIC model defaults to a centered top-down camera view", () => {
  assert.match(component, /const substrateCenter = new THREE\.Vector3\(chipCenterX, center\.y, 0\);/);
  assert.match(component, /child\.position\.sub\(substrateCenter\);/);
  assert.match(component, /const modelViewCenterX = 0;/);
  assert.match(component, /const substrateViewHalfWidth = chipLen \/ 2;/);
  assert.match(component, /const defaultTopCameraDistance = 13;/);
  assert.match(component, /const getTopCameraDistanceForAspect = \(aspect\) =>/);
  assert.match(component, /camera\.position\.set\(modelViewCenterX, getTopCameraDistanceForAspect\(camera\.aspect\), 0\.01\);/);
  assert.match(component, /controls\.target\.set\(modelViewCenterX, 0, 0\);/);
  assert.doesNotMatch(component, /camera\.position\.set\(0, 5\.5, 9\.5\);/);
  assert.doesNotMatch(component, /controls\.target\.set\(0, 0, 0\);/);
});

test("PIC top-down default view leaves horizontal margin around the chip", () => {
  const halfVisibleWidth =
    Math.tan((cameraFovDegrees * Math.PI) / 360) *
    expectedDefaultCameraDistance *
    desktopDefaultAspect;
  const leftMargin = halfVisibleWidth - substrateViewHalfWidth;
  const rightMargin = halfVisibleWidth - substrateViewHalfWidth;

  assert.ok(leftMargin >= modelXPadding, `left margin ${leftMargin.toFixed(2)} is too small`);
  assert.ok(rightMargin >= modelXPadding, `right margin ${rightMargin.toFixed(2)} is too small`);
});

test("PIC top-down default view backs up on narrow canvases to avoid side clipping", () => {
  const fixedDistanceHalfVisibleWidth =
    Math.tan((cameraFovDegrees * Math.PI) / 360) *
    expectedDefaultCameraDistance *
    mobileDefaultAspect;
  const requiredMobileDistance =
    (substrateViewHalfWidth + modelXPadding) /
    (Math.tan((cameraFovDegrees * Math.PI) / 360) * mobileDefaultAspect);

  assert.ok(
    fixedDistanceHalfVisibleWidth < substrateViewHalfWidth + modelXPadding,
    "a fixed desktop distance should be too close for the mobile aspect ratio"
  );
  assert.ok(requiredMobileDistance > expectedDefaultCameraDistance);
  assert.match(component, /const modelViewXPadding = 0\.55;/);
  assert.match(component, /const getTopCameraDistanceForAspect = \(aspect\) =>/);
  assert.match(component, /\(substrateViewHalfWidth \+ modelViewXPadding\) \//);
  assert.match(component, /Math\.max\(defaultTopCameraDistance, fitDistance\);/);
});
