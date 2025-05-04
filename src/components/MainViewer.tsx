import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import ViewerControls from "./ViewerControls";
import { setupDistanceTool } from "../tools/DistanceTool";
import { setupAngleTool } from "../tools/AngleTool";
import { setupClippingPlaneTool } from "../tools/ClippingPlaneTool";
import { frameModelToCamera } from "../tools/centerCamera";
import "./MainViewer.css";

interface MainViewerProps {
  file?: File;
  modelUrl?: string;
}

// Helper to find the first mesh in an Object3D hierarchy
function findFirstMesh(obj: THREE.Object3D): THREE.Mesh | null {
  if ((obj as THREE.Mesh).isMesh) return obj as THREE.Mesh;
  for (const child of obj.children) {
    const mesh = findFirstMesh(child);
    if (mesh) return mesh;
  }
  return null;
}

const MainViewer: React.FC<MainViewerProps> = ({ file, modelUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [facesVisible, setFacesVisible] = useState(true);
  const [edgesVisible, setEdgesVisible] = useState(true);
  const [faceColor, setFaceColor] = useState("#6699ff");
  const [edgeColor, setEdgeColor] = useState("#ffffff");
  const [axesVisible, setAxesVisible] = useState(false);
  const [toolMode, setToolMode] = useState<"none" | "distance" | "angle">("none");
  const [isClippingEnabled, setIsClippingEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshRef = useRef<THREE.Object3D | null>(null);
  const axesHelperRef = useRef<THREE.AxesHelper | null>(null);
  const distanceToolRef = useRef<any>(null);
  const angleToolRef = useRef<any>(null);
  const clippingToolRef = useRef<any>(null);
  const initialCameraPos = useRef(new THREE.Vector3());
  const initialControlsTarget = useRef(new THREE.Vector3());
  const edgeLineRef = useRef<THREE.LineSegments | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const axesLength = 1e6; // Very large value for 'infinite' axes

  // Load model
  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);
    setError(null);
    // Cleanup previous scene
    if (rendererRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
      mountRef.current.removeChild(rendererRef.current.domElement);
    }
    rendererRef.current?.dispose();
    // Remove edge line
    if (edgeLineRef.current) {
      edgeLineRef.current.geometry.dispose();
      (edgeLineRef.current.material as THREE.Material).dispose?.();
      edgeLineRef.current = null;
    }
    // Remove mesh group
    if (meshGroupRef.current) {
      meshGroupRef.current.clear();
      meshGroupRef.current = null;
    }
    // Scene setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222233);
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 10000);
    camera.position.set(0, 0, 100);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(10, 10, 10);
    scene.add(ambient, dirLight);
    // Axes
    const axes = new THREE.AxesHelper(axesLength);
    axes.visible = axesVisible;
    axesHelperRef.current = axes;
    scene.add(axes);
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controlsRef.current = controls;
    // Clipping
    const clippingTool = setupClippingPlaneTool(renderer, scene, "x");
    clippingToolRef.current = clippingTool;
    // Model loading
    let mesh: THREE.Object3D | null = null;
    let ext = "";
    let url: string | undefined;
    if (file) {
      ext = file.name.split(".").pop()?.toLowerCase() || "";
      url = URL.createObjectURL(file);
    } else if (modelUrl) {
      ext = modelUrl.split(".").pop()?.toLowerCase() || "";
      url = modelUrl;
    }
    async function loadModel() {
      try {
        if (!url) throw new Error("No file or URL provided");
        console.log("Loading model:", url, "with extension:", ext);
        if (ext === "stl") {
          const loader = new STLLoader();
          const geometry = await new Promise<THREE.BufferGeometry>((resolve, reject) => loader.load(url!, resolve, undefined, reject));
          const mat = new THREE.MeshStandardMaterial({ color: faceColor });
          mesh = new THREE.Mesh(geometry, mat);
        } else if (ext === "obj") {
          const loader = new OBJLoader();
          mesh = await new Promise<THREE.Object3D>((resolve, reject) => loader.load(url!, resolve, undefined, reject));
          // Set face color for all meshes in OBJ
          mesh.traverse((obj: any) => {
            if (obj.isMesh && obj.material && obj.material.color) {
              obj.material.color.set(faceColor);
            }
          });
        } else {
          throw new Error("Unsupported file type");
        }
        if (mesh) {
          meshRef.current = mesh;
          // Find the mesh for tools and edges
          const meshForTools = findFirstMesh(mesh);
          // Create group for mesh and edge line
          const group = new THREE.Group();
          if (mesh) group.add(mesh);
          // Edges: create and add edge line for mesh geometry
          if (meshForTools && meshForTools.geometry) {
            const edges = new THREE.EdgesGeometry(meshForTools.geometry);
            const line = new THREE.LineSegments(
              edges,
              new THREE.LineBasicMaterial({ color: edgeColor })
            );
            line.visible = edgesVisible;
            group.add(line);
            edgeLineRef.current = line;
          }
          meshGroupRef.current = group;
          scene.add(group);
          // Setup tools
          if (meshForTools) {
            distanceToolRef.current = setupDistanceTool(scene, camera, renderer, controls, meshForTools);
            angleToolRef.current = setupAngleTool(scene, camera, renderer, controls, meshForTools);
          }
          // Frame model
          frameModelToCamera(group, camera, controls, mountRef.current!);
          initialCameraPos.current.copy(camera.position);
          initialControlsTarget.current.copy(controls.target);
        }
        setLoading(false);
      } catch (e: any) {
        setError(e.message || "Error loading model");
        setLoading(false);
      }
    }
    loadModel();
    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    // Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (file && url) URL.revokeObjectURL(url);
      // Remove edge line
      if (edgeLineRef.current) {
        edgeLineRef.current.geometry.dispose();
        (edgeLineRef.current.material as THREE.Material).dispose?.();
        edgeLineRef.current = null;
      }
      // Remove mesh group
      if (meshGroupRef.current) {
        meshGroupRef.current.clear();
        meshGroupRef.current = null;
      }
    };
  }, [file, modelUrl]);

  // Edges toggle
  useEffect(() => {
    if (edgeLineRef.current) {
      edgeLineRef.current.visible = edgesVisible;
    }
  }, [edgesVisible]);

  // Faces toggle
  useEffect(() => {
    const meshForTools = meshRef.current && findFirstMesh(meshRef.current);
    if (meshForTools) {
      meshForTools.visible = facesVisible;
    }
  }, [facesVisible]);

  // Face color
  useEffect(() => {
    const meshForTools = meshRef.current && findFirstMesh(meshRef.current);
    if (
      meshForTools &&
      meshForTools.material &&
      (meshForTools.material as THREE.Material).type === 'MeshStandardMaterial'
    ) {
      (meshForTools.material as THREE.MeshStandardMaterial).color.set(faceColor);
    }
    // For OBJ: update all mesh materials in the loaded object
    if (meshRef.current) {
      meshRef.current.traverse?.((obj: any) => {
        if (obj.isMesh && obj.material && obj.material.color) {
          obj.material.color.set(faceColor);
        }
      });
    }
  }, [faceColor]);

  // Edge color
  useEffect(() => {
    if (edgeLineRef.current) {
      const mat = edgeLineRef.current.material as THREE.LineBasicMaterial;
      mat.color.set(edgeColor);
    }
  }, [edgeColor]);

  // Axes toggle
  useEffect(() => {
    if (axesHelperRef.current) {
      axesHelperRef.current.visible = axesVisible;
    }
  }, [axesVisible]);

  // Controls handlers
  const handleResetView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.copy(initialCameraPos.current);
      controlsRef.current.target.copy(initialControlsTarget.current);
      controlsRef.current.update();
    }
  };

  // Clipping
  const handleToggleClipping = () => {
    setIsClippingEnabled((v) => {
      if (!clippingToolRef.current) return v;
      if (!v) clippingToolRef.current.enable();
      else clippingToolRef.current.disable();
      return !v;
    });
  };
  const handleClippingMoveForward = () => clippingToolRef.current?.move(1);
  const handleClippingMoveBackward = () => clippingToolRef.current?.move(-1);
  const handleSetClippingAxis = (axis: "x" | "y" | "z") => clippingToolRef.current?.setAxis(axis);

  // Distance/Angle tool
  useEffect(() => {
    if (distanceToolRef.current) {
      if (toolMode === "distance") distanceToolRef.current.enable();
      else distanceToolRef.current.disable();
    }
    if (angleToolRef.current) {
      if (toolMode === "angle") angleToolRef.current.enable();
      else angleToolRef.current.disable();
    }
  }, [toolMode]);

  const handleClearMeasurements = () => distanceToolRef.current?.clear();
  const handleClearAngleMeasurements = () => angleToolRef.current?.clear();

  useEffect(() => {
    // Remove previous axesHelper if present
    if (axesHelperRef.current && sceneRef.current) {
      sceneRef.current.remove(axesHelperRef.current);
      axesHelperRef.current = null;
    }
    // Add axesHelper if axesVisible
    if (axesVisible && sceneRef.current) {
      const axes = new THREE.AxesHelper(axesLength);
      axes.visible = true;
      axesHelperRef.current = axes;
      sceneRef.current.add(axes);
    }
  }, [axesVisible, sceneRef.current]);

  return (
    <div className="app-container" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1000, background: "#222233" }}>
      <ViewerControls
        facesVisible={facesVisible}
        edgesVisible={edgesVisible}
        faceColor={faceColor}
        edgeColor={edgeColor}
        axesVisible={axesVisible}
        isClippingEnabled={isClippingEnabled}
        toolMode={toolMode}
        onToggleFaces={() => setFacesVisible((v) => !v)}
        onToggleEdges={() => setEdgesVisible((v) => !v)}
        onFaceColorChange={setFaceColor}
        onEdgeColorChange={setEdgeColor}
        onResetView={handleResetView}
        onToggleAxes={() => setAxesVisible((v) => !v)}
        onToolModeChange={setToolMode}
        onClearMeasurements={handleClearMeasurements}
        onClearAngleMeasurements={handleClearAngleMeasurements}
        onToggleClipping={handleToggleClipping}
        onClippingMoveForward={handleClippingMoveForward}
        onClippingMoveBackward={handleClippingMoveBackward}
        onSetClippingAxis={handleSetClippingAxis}
      />
      <div ref={mountRef} className="three-canvas" style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, background: "#222233" }}>
        {loading && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 3000
          }}>
            <div className="spinner" style={{
              width: 48,
              height: 48,
              border: "6px solid #444",
              borderTop: "6px solid #fff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: 16
            }} />
            Loading model...
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}
        {error && <div style={{ position: "absolute", top: 16, left: 16, color: "red" }}>{error}</div>}
        {!file && !modelUrl && !loading && !error && (
          <div style={{ position: "absolute", top: 16, left: 16, color: "#fff" }}>No model loaded</div>
        )}
        <div id="viewer-label-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2000 }} />
      </div>
    </div>
  );
};

export default MainViewer; 