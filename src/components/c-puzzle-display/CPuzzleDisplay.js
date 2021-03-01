import React, { useState } from "react";
import "./CPuzzleDisplay.scss";

const CPuzzleDisplay = ({ puzzle, key, url }) => {
  const [error, setError] = useState("");

  return (
    <div className="c-puzzle-container">
      <h3 className="text-center"></h3>
      <image src={url} />
    </div>
  );
};

export default CPuzzleDisplay;
