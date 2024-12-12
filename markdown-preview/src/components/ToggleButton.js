import React, { useState } from "react";

const ToggleButton = ({ initState, values = ["On", "Off"] }) => {
  const [state, changeState] = useState(initState);

  const handleToggle = () => {
    const nextState = state === values[0] ? values[1] : values[0];
    changeState(nextState);
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          background: state === values[0] ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        {state}
      </button>
    </div>
  );
};

export default ToggleButton;
