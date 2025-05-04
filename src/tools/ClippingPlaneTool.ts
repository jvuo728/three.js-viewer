import * as THREE from "three";

type ClippingAxis = "x" | "y" | "z";

export function setupClippingPlaneTool(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  initialAxis: ClippingAxis = "x"
) {
  const planeNormal = new THREE.Vector3(1, 0, 0); // default X axis
  const plane = new THREE.Plane(planeNormal.clone(), 0);

  renderer.localClippingEnabled = true;

  const helper = new THREE.PlaneHelper(plane, 100, 0xffff00);
  helper.visible = false; // Initially hidden
  scene.add(helper);

  let isEnabled = false;

  function setAxis(axis: ClippingAxis) {
    if (axis === "x") plane.normal.set(1, 0, 0);
    if (axis === "y") plane.normal.set(0, 1, 0);
    if (axis === "z") plane.normal.set(0, 0, 1);
    plane.constant = 0;

    helper.updateMatrixWorld(true);
  }

  function move(offset: number) {
    plane.constant += offset;
  }

  function enable() {
    isEnabled = true;
    renderer.clippingPlanes = [plane];
    helper.visible = true;
  }

  function disable() {
    isEnabled = false;
    renderer.clippingPlanes = [];
    helper.visible = false;
  }

  function dispose() {
    scene.remove(helper);
  }

  // Initialize with default axis
  setAxis(initialAxis);

  return {
    enable,
    disable,
    dispose,
    setAxis,
    move,
  };
} 