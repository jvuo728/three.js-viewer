import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function frameModelToCamera(
  group: THREE.Group,
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  container: HTMLElement
): THREE.Box3 {
  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.sub(center);

  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const fovVert = camera.fov * (Math.PI / 180);
  const aspectRatio = container.clientWidth / container.clientHeight;
  const fovHorz = 2 * Math.atan(Math.tan(fovVert / 2) * aspectRatio);
  const distVert = sphere.radius / Math.tan(fovVert / 2);
  const distHorz = sphere.radius / Math.tan(fovHorz / 2);
  const distance = Math.max(distVert, distHorz) * 1.2;

  camera.position.set(distance, distance, distance);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  controls.target.set(0, 0, 0);
  controls.update();

  return box;
} 