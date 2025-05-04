// utility file to find the closest vertex to the user's click in a 3D scene
import * as THREE from "three";

/**
 * Given an intersection result from a THREE.Raycaster,
 * returns the closest vertex (in world space) from the intersected triangle.
 */
export function getClosestVertexFromIntersection(
  intersect: THREE.Intersection
): THREE.Vector3 | null {
  if (!intersect.face) return null;

  const geometry = (intersect.object as THREE.Mesh)
    .geometry as THREE.BufferGeometry;
  const positionAttr = geometry.attributes.position;

  if (!positionAttr) return null;

  // Local space triangle vertices
  const va = new THREE.Vector3().fromBufferAttribute(
    positionAttr,
    intersect.face.a
  );
  const vb = new THREE.Vector3().fromBufferAttribute(
    positionAttr,
    intersect.face.b
  );
  const vc = new THREE.Vector3().fromBufferAttribute(
    positionAttr,
    intersect.face.c
  );

  // Convert to world space
  intersect.object.localToWorld(va);
  intersect.object.localToWorld(vb);
  intersect.object.localToWorld(vc);

  const clicked = intersect.point;

  // Find closest
  const closest = [va, vb, vc].reduce((prev, curr) =>
    curr.distanceTo(clicked) < prev.distanceTo(clicked) ? curr : prev
  );

  return closest;
} 