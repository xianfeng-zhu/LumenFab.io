import * as THREE from "three";

/**
 * Applies PicChipModel-style trackpad interaction to an OrbitControls instance.
 *
 * - Single-finger drag: rotate
 * - Two-finger drag (wheel without ctrlKey): pan
 * - Ctrl + two-finger drag (wheel with ctrlKey): zoom / dolly
 * - Pinch (touch): zoom + pan
 */
export function setupTrackpadControls(controls, camera, domElement) {
  // Touch mapping: 1 finger rotate, 2 fingers dolly+pan
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;

  // Desktop trackpad wheel: scroll = pan, ctrl+scroll = zoom
  const _right = new THREE.Vector3();
  const _up = new THREE.Vector3();

  const wheelHandler = (e) => {
    e.preventDefault();
    const rect = domElement.getBoundingClientRect();
    const pxPerLine = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 18 : 1;
    const dx = (e.deltaX * pxPerLine) / rect.width;
    const dy = (e.deltaY * pxPerLine) / rect.height;

    if (e.ctrlKey) {
      // Zoom (dolly)
      const dist = camera.position.distanceTo(controls.target);
      const factor = 1 + dy * 1.2;
      camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);
    } else {
      // Pan (with screen-space directions at target depth)
      camera.getWorldDirection(_right.crossVectors(camera.up, _right).normalize());
      _up.copy(camera.up).normalize();
      const panSpeed = controls.target.distanceTo(camera.position) * 1.6;
      _right.multiplyScalar(-dx * panSpeed);
      _up.multiplyScalar(dy * panSpeed);
      controls.target.addScaledVector(_right, 1).addScaledVector(_up, 1);
    }
  };

  domElement.addEventListener("wheel", wheelHandler, { capture: true, passive: false });

  return () => {
    domElement.removeEventListener("wheel", wheelHandler, { capture: true });
  };
}
