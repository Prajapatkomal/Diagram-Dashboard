import { useState, useEffect } from "react";
import { getComponents } from "../services/api";

function ComponentList() {
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = getComponents();
    setComponents(data);
  }, []);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        flex: "1",
        minWidth: "200px",
      }}
    >
      <h3>Components</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {components.map((component) => (
          <li
            key={component.id}
            onClick={() => setSelected(component.id)}
            style={{
              padding: "10px",
              cursor: "pointer",
              marginBottom: "5px",
              borderRadius: "5px",
              backgroundColor:
                selected === component.id ? "#e0e0e0" : "transparent",
              transition: "0.2s",
            }}
          >
            {component.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComponentList;
