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
  assert.match(component, /const rxRingBusW = 0\.24;/);
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
