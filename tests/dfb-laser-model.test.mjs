import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const component = await readFile(
  new URL("../src/components/DfbLaserModel.astro", import.meta.url),
  "utf8"
);

test("DFB model uses PIC-style touch and trackpad interaction", () => {
  assert.match(component, /controls\.enableZoom = true;/);
  assert.match(component, /controls\.touches\.ONE = THREE\.TOUCH\.ROTATE;/);
  assert.match(component, /controls\.touches\.TWO = THREE\.TOUCH\.DOLLY_PAN;/);
  assert.match(component, /window\.addEventListener\("wheel", wheelHandler, \{ capture: true, passive: false \}\);/);
  assert.match(component, /if \(e\.target !== canvas\) return;/);
  assert.match(component, /if \(e\.ctrlKey\) \{/);
  assert.match(component, /controls\.target\.addScaledVector\(_right, dx\)\.addScaledVector\(_up, dy\);/);
  assert.match(component, /window\.removeEventListener\("wheel", wheelHandler, \{ capture: true \}\);/);
});

test("DFB model includes a PIC-style layer explode button and animation state", () => {
  assert.match(component, /data-dfb-explode-toggle aria-pressed="false"/);
  assert.match(component, />分层展开</);
  assert.match(component, /const layerGroups = \[];/);
  assert.match(component, /group\.userData\.layerIndex = layerGroups\.length;/);
  assert.match(component, /chip\.userData\.layerGroups = layerGroups;/);
  assert.match(component, /const layerGroups = model\.userData\.layerGroups;/);
  assert.match(component, /const explodeBtn = figure\?\.querySelector\("\[data-dfb-explode-toggle\]"\);/);
  assert.match(component, /let isExploded = false;/);
  assert.match(component, /const explodeGap = 0\.38;/);
  assert.match(component, /const handleExplodeToggle = \(\) => \{/);
  assert.match(component, /explodeBtn\?\.addEventListener\("click", handleExplodeToggle\);/);
  assert.match(component, /const explodeTarget = isExploded \? explodeGap : 0;/);
  assert.match(component, /layerGroups\[i\]\.position\.y = \(layerGroups\[i\]\.userData\.baseY \|\| 0\) \+ newVal;/);
  assert.match(component, /explodeBtn\?\.removeEventListener\("click", handleExplodeToggle\);/);
});

test("DFB output light stays attached to the active-region layer in explode view", () => {
  assert.match(component, /output: "activeRegion"/);
  assert.match(component, /\{ key: "output", size: \[1\.5, 0\.4, 0\.5\], position: \[length \/ 2 \+ 0\.72, layerCenters\["MQW active region"\], cutawayOffset\], priority: 4 \}/);
});

test("DFB model describes the ridge as lateral confinement instead of the optical path", () => {
  assert.match(component, /\["ridge", "#0891b2", "Ridge 侧向波导结构"\]/);
  assert.match(component, /title: "Ridge 侧向波导结构"/);
  assert.match(component, /它不是光从外部进入的通道/);
  assert.match(component, /激光模式主要位于 MQW \/ SCH 附近/);
  assert.match(component, /SCH \/ 包层提供垂直限制，ridge 提供横向限制/);
});

test("DFB model places optical activity controls after the cavity mode control", () => {
  assert.match(
    component,
    /\["mode", "#0891b2", "腔内光场分布"\],\n  \["photonPool", "#f472b6", "有源区光子 \/ 波长选择"\],\n  \["braggSelection", "#38bdf8", "Bragg 波长选择"\],\n  \["output", "#60a5fa", "边发射输出光"\]/
  );
});

test("DFB model keeps default transparent structures legible", () => {
  assert.match(component, /const mode = new THREE\.Mesh\(modeGeometry, transparent\(0x0891b2, 0\.62\)\);/);
  assert.match(component, /position: \[0, topY \+ 0\.045, cutawayOffset - 0\.54\],[\s\S]*?opacity: 0\.64/);
  assert.match(component, /position: \[0, topY \+ 0\.08, cutawayOffset\],[\s\S]*?opacity: 0\.5/);
  assert.match(component, /position: \[length \/ 2 \+ 0\.025, \(topY \+ 0\.25\) \/ 2, 0\],[\s\S]*?opacity: 0\.36/);
  assert.match(component, /position: \[length \/ 2 \+ 0\.07, \(topY \+ 0\.2\) \/ 2, cutawayOffset\],[\s\S]*?opacity: 0\.58/);
});

test("DFB model computes a responsive default camera frame from model bounds", () => {
  assert.match(component, /const modelViewRadius = model\.userData\.modelViewRadius;/);
  assert.match(component, /const defaultCameraDirection = new THREE\.Vector3\(4\.8, 3\.4, 5\.4\)\.normalize\(\);/);
  assert.match(component, /const getCameraDistanceForAspect = \(aspect\) =>/);
  assert.match(component, /modelViewRadius \/ \(Math\.tan\(THREE\.MathUtils\.degToRad\(camera\.fov\) \/ 2\) \* fitAspect\)/);
  assert.match(component, /const setDefaultCameraFrame = \(\) =>/);
  assert.match(component, /camera\.position\.copy\(defaultCameraDirection\)\.multiplyScalar\(getCameraDistanceForAspect\(camera\.aspect\)\)\.add\(controls\.target\);/);
  assert.match(component, /setDefaultCameraFrame\(\);/);
});

test("DFB model adds animated current-injection paths through the active region", () => {
  assert.match(component, /const createSegmentedPathCurve = \(points\) => \{/);
  assert.match(component, /const createGlowSpheres = \(\{ count, radius, color, opacity = 0\.72 \}\) =>/);
  assert.match(component, /const currentPathCurves = \[];/);
  assert.match(component, /const currentGlowSpheres = \[];/);
  assert.match(component, /new THREE\.Vector3\(x, topY \+ 0\.34, cutawayOffset\)/);
  assert.match(component, /new THREE\.Vector3\(x, layerCenters\["MQW active region"\], cutawayOffset\)/);
  assert.match(component, /new THREE\.TubeGeometry\(curve, 24, 0\.018, 8, false\)/);
  assert.match(component, /currentGlowSpheres\.push\(glowSpheres\);/);
  assert.match(component, /for \(let i = 0; i < currentGlowSpheres\.length; i \+= 1\)/);
  assert.match(component, /const pt = currentPathCurves\[i\]\.getPointAt\(t\);/);
});

test("DFB model animates active-region photons and selected wavelength output", () => {
  assert.match(component, /\["photonPool", "#f472b6", "有源区光子 \/ 波长选择"\]/);
  assert.match(component, /photonPool: \{/);
  assert.match(component, /const activePhotons = \[];/);
  assert.match(component, /const photonSpecs = \[/);
  assert.match(component, /isTarget: true/);
  assert.match(component, /isTarget: false/);
  assert.match(component, /tagPart\(photon, "photonPool", false, 3\)/);
  assert.match(component, /const outputPhotonCurve = createSegmentedPathCurve/);
  assert.match(component, /const outputPhotonSpheres = createGlowSpheres/);
  assert.match(component, /outputPhotonGroup\.add\(tagPart\(new THREE\.Mesh\(outputPhotonGeometry, transparent\(0x60a5fa, 0\.5\)\), "output"\)\);/);
  assert.match(component, /for \(const photon of activePhotons\)/);
  assert.match(component, /if \(photon\.userData\.isTargetPhoton\)/);
  assert.match(component, /const suppression = smoothstep\(0\.58, 0\.9, travel\);/);
  assert.match(component, /for \(const item of outputPhotonSpheres\)/);
  assert.match(component, /const pt = outputPhotonCurve\.getPointAt\(t\);/);
});

test("DFB model shows grating feedback by animating coupled forward and backward pulses", () => {
  assert.match(component, /const gratingFeedbackCurve = createSegmentedPathCurve/);
  assert.match(component, /const gratingFeedbackPulses = \[/);
  assert.match(component, /direction: 1/);
  assert.match(component, /direction: -1/);
  assert.match(component, /tagPart\(pulse, "grating", false, 3\)/);
  assert.match(component, /gratingFeedbackPulses/);
  assert.match(component, /const reflectedT = pulse\.userData\.direction > 0 \? t : 1 - t;/);
  assert.match(component, /const feedbackPoint = gratingFeedbackCurve\.getPointAt\(reflectedT\);/);
  assert.match(component, /pulse\.material\.opacity = 0\.16 \+ 0\.58 \* envelope;/);
});

test("DFB model shows Bragg wavelength selection with coherent and suppressed wave traces", () => {
  assert.match(component, /\["braggSelection", "#38bdf8", "Bragg 波长选择"\]/);
  assert.match(component, /braggSelection: \{/);
  assert.match(component, /braggSelection: "activeRegion"/);
  assert.match(component, /const braggRibbonWidth = 0\.035;/);
  assert.match(component, /const createBraggWaveLine = \(\{ color, baseY, baseZ, phaseOffset, waveNumber, isTargetBragg \}\) =>/);
  assert.match(component, /const updateBraggWaveLine = \(line, time\) =>/);
  assert.match(component, /new THREE\.MeshBasicMaterial\(\{/);
  assert.match(component, /side: THREE\.DoubleSide/);
  assert.match(component, /const braggSelectionGroup = new THREE\.Group\(\);/);
  assert.match(component, /const braggSelectionLines = \[/);
  assert.match(component, /isTargetBragg: true/);
  assert.match(component, /isTargetBragg: false/);
  assert.match(component, /tagPart\(line, "braggSelection", false, 3\)/);
  assert.match(component, /braggSelectionLines,/);
  assert.match(component, /for \(const wave of braggSelectionLines\)/);
  assert.match(component, /updateBraggWaveLine\(wave, time\);/);
  assert.match(component, /position\.setXYZ\(i \* 2, x, y - braggRibbonWidth, z\);/);
});
