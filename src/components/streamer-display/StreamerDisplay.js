import React from "react";
import "./StreamerDisplay.scss";

const StreamerDisplay = ({ streamer }) => {
  return (
    <div className="streamer-container">
      <h3 className="text-center"> {streamer.title} </h3>
      <img className="streamer" src={streamer.url} />
    </div>
  );
};

export default StreamerDisplay;
