import { useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";

function Dashboard() {
  const [image, setImage] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Diagram Dashboard</h1>

      {/* Upload Section */}
      <UploadBox setImage={setImage} />


      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <DiagramViewer image={image} />
        <ComponentList />
      </div>
    </div>
  );
}

export default Dashboard;