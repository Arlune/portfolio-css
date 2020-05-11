import React, { useState } from "react";
import "./ProgressBarA.scss";

function ProgressBarA() {
  const [width, setWidth] = useState(30);
  return (
    <div className="meter">
      <span style={{ width: `${width}%` }}></span>
      <div className="buttons-container">
        <button
          onClick={() => {
            setWidth(width - 5);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setWidth(width + 5);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProgressBarA;
