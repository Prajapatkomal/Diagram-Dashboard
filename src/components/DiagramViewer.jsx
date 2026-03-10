import { useState } from "react";

function DiagramViewer({ image }) {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    setZoom(zoom - 0.2);
  };

  const resetZoom = () => {
    setZoom(1);
  };

  return (
    <div 
  style={{
    border: "1px solid #ccc",
    padding: "20px",
    flex: "2",
    minWidth: "300px"
  }}
>
      <h3>Diagram Viewer</h3>

      {/* Zoom Controls */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut} style={{ marginLeft: "10px" }}>
          Zoom Out
        </button>
        <button onClick={resetZoom} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>

      {/* Image */}
      {image ? (
        <img
          src={image}
          alt="diagram"
          style={{
            maxWidth: "100%",
            transform: `scale(${zoom})`,
            transition: "0.3s",
          }}
        />
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  );
}

export default DiagramViewer;