import { useState } from "react";

function UploadBox({ setImage }) {
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        border: "1px dashed gray",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <input type="file" accept="image/*" onChange={handleUpload} />

      {fileName && (
        <p style={{ marginTop: "10px" }}>
          Uploaded File: <b>{fileName}</b>
        </p>
      )}
    </div>
  );
}

export default UploadBox;