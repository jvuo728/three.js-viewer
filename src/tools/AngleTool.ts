import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getClosestVertexFromIntersection } from "./closestVertex";

interface LabelEntry {
  element: HTMLDivElement;
  position: THREE.Vector3;
}

export function setupAngleTool(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  controls: OrbitControls,
  mesh: THREE.Mesh
) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const points: THREE.Vector3[] = [];
  const labels: LabelEntry[] = [];
  const lines: THREE.Line[] = [];
  const markers: THREE.Sprite[] = [];
  let isEnabled = false;

  function onClick(event: MouseEvent) {
    if (!isEnabled) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(mesh);

    if (intersects.length > 0) {
      const vertex = getClosestVertexFromIntersection(intersects[0]);
      if (!vertex) return;

      points.push(vertex);

      // Add vertex marker
      const spriteMaterial = new THREE.SpriteMaterial({ color: 0x00ff00 });
      const marker = new THREE.Sprite(spriteMaterial);
      marker.position.copy(vertex);
      scene.add(marker);
      markers.push(marker);
      updateMarkerScales();

      if (points.length === 3) {
        const [a, b, c] = points;
        
        // Create lines for angle visualization
        const geometry1 = new THREE.BufferGeometry().setFromPoints([b, a]);
        const geometry2 = new THREE.BufferGeometry().setFromPoints([b, c]);
        const line1 = new THREE.Line(
          geometry1,
          new THREE.LineBasicMaterial({ color: 0x00ff00 })
        );
        const line2 = new THREE.Line(
          geometry2,
          new THREE.LineBasicMaterial({ color: 0x00ff00 })
        );
        scene.add(line1);
        scene.add(line2);
        lines.push(line1, line2);

        // Calculate angle
        const v1 = a.clone().sub(b);
        const v2 = c.clone().sub(b);
        const angleRad = v1.angleTo(v2);
        const angleDeg = THREE.MathUtils.radToDeg(angleRad);

        // Create label
        const labelDiv = document.createElement("div");
        labelDiv.style.position = "absolute";
        labelDiv.style.color = "#00ff00";
        labelDiv.style.padding = "4px";
        labelDiv.style.background = "rgba(0, 0, 0, 0.7)";
        labelDiv.style.borderRadius = "4px";
        labelDiv.textContent = `${angleDeg.toFixed(1)}°`;
        const overlay = document.getElementById("viewer-label-overlay");
        if (overlay) overlay.appendChild(labelDiv);

        labels.push({ element: labelDiv, position: b.clone() });
        points.length = 0;
      }
    }
  }

  function updateMarkerScales() {
    const desiredPixelSize = 16; // Desired marker size in pixels
    markers.forEach(marker => {
      const distance = camera.position.distanceTo(marker.position);
      const vFOV = THREE.MathUtils.degToRad(camera.fov); // vertical field of view in radians
      const visibleHeight = 2 * Math.tan(vFOV / 2) * distance;
      const scale = (desiredPixelSize / renderer.domElement.clientHeight) * visibleHeight;
      marker.scale.set(scale, scale, 1);
    });
  }

  function updateLabels() {
    const overlay = document.getElementById("viewer-label-overlay");
    const width = overlay ? overlay.offsetWidth : window.innerWidth;
    const height = overlay ? overlay.offsetHeight : window.innerHeight;
    labels.forEach(({ element, position }) => {
      const screenPos = position.clone().project(camera);
      element.style.left = ((screenPos.x + 1) * width) / 2 + "px";
      element.style.top = ((-screenPos.y + 1) * height) / 2 + "px";
    });
    updateMarkerScales();
  }

  controls.addEventListener("change", updateLabels);
  window.addEventListener("resize", updateLabels);

  function enable() {
    isEnabled = true;
    renderer.domElement.style.cursor = "crosshair";
    renderer.domElement.addEventListener("click", onClick);
  }

  function disable() {
    isEnabled = false;
    renderer.domElement.style.cursor = "auto";
    renderer.domElement.removeEventListener("click", onClick);
  }

  function clear() {
    points.length = 0;
    
    lines.forEach((line) => {
      scene.remove(line);
      line.geometry.dispose();
      if ((line.material as THREE.Material).dispose) {
        (line.material as THREE.Material).dispose();
      }
    });
    lines.length = 0;

    markers.forEach((marker) => {
      scene.remove(marker);
      marker.material.dispose();
    });
    markers.length = 0;

    const overlay = document.getElementById("viewer-label-overlay");
    labels.forEach((label) => {
      if (overlay && overlay.contains(label.element)) overlay.removeChild(label.element);
      else if (label.element.parentElement) label.element.parentElement.removeChild(label.element);
    });
    labels.length = 0;
  }

  function dispose() {
    disable();
    clear();
    controls.removeEventListener("change", updateLabels);
    window.removeEventListener("resize", updateLabels);
  }

  return {
    enable,
    disable,
    clear,
    dispose,
    isEnabled: () => isEnabled
  };
} 