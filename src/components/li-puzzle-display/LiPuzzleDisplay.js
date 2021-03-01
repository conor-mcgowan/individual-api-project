import React from "react";
import "./LiPuzzleDisplay.scss";

const LiPuzzleDisplay = ({ liPuzzle }) => {
  return (
    <div className="li-puzzle-container">
      <h3 className="text-center"></h3>
      <iframe
        src="https://lichess.org/training/frame?theme=brown&bg=dark"
        className="li-puzzle"
        allowtransparency="true"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default LiPuzzleDisplay;
