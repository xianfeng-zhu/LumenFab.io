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
const cameraFovDegrees = 42;
const desktopDefaultAspect = 1 / 0.64;
const modelXPadding = 0.55;
const expectedDefaultCameraDistance = 14;

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

test("PIC MZI output waveguide is flush with and centered on the output MMI", () => {
  assert.equal(mziOutputFaceX, 5.275);
  assert.ok(Math.abs(mziCenterZ + 0.5) < 1e-9);
  assert.match(component, /const mziOutputFaceX = mziMmiOutCx \+ mziMmiLen \/ 2;/);
  assert.match(component, /const outWgStartX = mziOutputFaceX;/);
  assert.match(component, /const outWgZ = mziCenterZ;/);
  assert.match(component, /position: \[chipRightX - 0\.02, ribY \+ 0\.04, outWgZ\]/);
  assert.doesNotMatch(component, /position: \[outWgCx, ribY, 0\.4\]/);
  assert.doesNotMatch(component, /position: \[txOutputGcBranchX, ribY, -0\.4\]/);
});

test("PIC model defaults to a centered top-down camera view", () => {
  assert.match(component, /modelViewCenterX: chipCenterX/);
  assert.match(component, /const defaultTopCameraDistance = 14;/);
  assert.match(component, /camera\.position\.set\(modelViewCenterX, defaultTopCameraDistance, 0\.01\);/);
  assert.match(component, /controls\.target\.set\(modelViewCenterX, 0, 0\);/);
  assert.doesNotMatch(component, /camera\.position\.set\(0, 5\.5, 9\.5\);/);
  assert.doesNotMatch(component, /controls\.target\.set\(0, 0, 0\);/);
});

test("PIC top-down default view leaves horizontal margin around the chip", () => {
  const halfVisibleWidth =
    Math.tan((cameraFovDegrees * Math.PI) / 360) *
    expectedDefaultCameraDistance *
    desktopDefaultAspect;
  const leftMargin = halfVisibleWidth - (chipCenterX - chipLeftX);
  const rightMargin = halfVisibleWidth - (chipRightX - chipCenterX);

  assert.ok(leftMargin >= modelXPadding, `left margin ${leftMargin.toFixed(2)} is too small`);
  assert.ok(rightMargin >= modelXPadding, `right margin ${rightMargin.toFixed(2)} is too small`);
});
