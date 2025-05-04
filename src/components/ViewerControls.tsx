import React from "react";
import "./ViewerControls.css";

interface ViewerControlsProps {
  facesVisible: boolean;
  edgesVisible: boolean;
  faceColor: string;
  edgeColor: string;
  axesVisible: boolean;
  isClippingEnabled: boolean;
  toolMode: "none" | "distance" | "angle";
  onToggleFaces: () => void;
  onToggleEdges: () => void;
  onFaceColorChange: (color: string) => void;
  onEdgeColorChange: (color: string) => void;
  onResetView: () => void;
  onToggleAxes: () => void;
  onToolModeChange: (mode: "none" | "distance" | "angle") => void;
  onClearMeasurements: () => void;
  onClearAngleMeasurements: () => void;
  onToggleClipping: () => void;
  onClippingMoveForward: () => void;
  onClippingMoveBackward: () => void;
  onSetClippingAxis: (axis: "x" | "y" | "z") => void;
}

const ViewerControls: React.FC<ViewerControlsProps> = ({
  facesVisible,
  edgesVisible,
  faceColor,
  edgeColor,
  axesVisible,
  isClippingEnabled,
  toolMode,
  onToggleFaces,
  onToggleEdges,
  onFaceColorChange,
  onEdgeColorChange,
  onResetView,
  onToggleAxes,
  onToolModeChange,
  onClearMeasurements,
  onClearAngleMeasurements,
  onToggleClipping,
  onClippingMoveForward,
  onClippingMoveBackward,
  onSetClippingAxis,
}) => {
  return (
    <div className="toolbar">
      <button onClick={onToggleFaces}>
        Faces: {facesVisible ? "On" : "Off"}
      </button>
      <button onClick={onToggleEdges}>
        Edges: {edgesVisible ? "On" : "Off"}
      </button>

      <label>
        Face
        <input
          type="color"
          value={faceColor}
          onChange={(e) => onFaceColorChange(e.target.value)}
        />
      </label>
      <label>
        Edge
        <input
          type="color"
          value={edgeColor}
          onChange={(e) => onEdgeColorChange(e.target.value)}
        />
      </label>

      <button onClick={onResetView}>Reset View</button>
      <button onClick={onToggleAxes}>
        {axesVisible ? "Hide Axes" : "Show Axes"}
      </button>

      <div className="tool-controls">
        <button
          onClick={() => onToolModeChange(toolMode === "distance" ? "none" : "distance")}
          style={{
            backgroundColor: toolMode === "distance" ? "#4CAF50" : undefined,
            color: toolMode === "distance" ? "white" : undefined,
          }}
        >
          {toolMode === "distance" ? "Exit Distance Tool" : "Distance Tool"}
        </button>
        <button
          onClick={onClearMeasurements}
          disabled={toolMode !== "distance"}
        >
          Clear Distance Measurements
        </button>

        <button
          onClick={() => onToolModeChange(toolMode === "angle" ? "none" : "angle")}
          style={{
            backgroundColor: toolMode === "angle" ? "#4CAF50" : undefined,
            color: toolMode === "angle" ? "white" : undefined,
          }}
        >
          {toolMode === "angle" ? "Exit Angle Tool" : "Angle Tool"}
        </button>
        <button
          onClick={onClearAngleMeasurements}
          disabled={toolMode !== "angle"}
        >
          Clear Angle Measurements
        </button>

        <button
          onClick={onToggleClipping}
          style={{
            backgroundColor: isClippingEnabled ? "#4CAF50" : undefined,
            color: isClippingEnabled ? "white" : undefined,
          }}
        >
          {isClippingEnabled ? "Disable Clipping" : "Enable Clipping"}
        </button>
        {isClippingEnabled && (
          <>
            <button onClick={onClippingMoveForward}>Move Forward</button>
            <button onClick={onClippingMoveBackward}>Move Backward</button>
            <div className="axis-buttons">
              <button onClick={() => onSetClippingAxis("x")}>X</button>
              <button onClick={() => onSetClippingAxis("y")}>Y</button>
              <button onClick={() => onSetClippingAxis("z")}>Z</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewerControls; 