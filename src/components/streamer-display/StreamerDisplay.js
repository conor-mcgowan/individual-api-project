import React from "react";
import "./StreamerDisplay.scss";

// let gif = props.gif
const StreamerDisplay = ({ streamer }) => {
  return (
    <div className="streamer-container">
      <h3 className="text-center"> {gif.title} </h3>
      <img className="streamer" src={gif.url} />
    </div>
  );
};

export default StreamerDisplay;
