import React from "react";
import "./StreamerDisplay.scss";

const StreamerDisplay = ({ user }) => {
  return (
    <div>
      <h3 className="text-center"> {user.username} </h3>
      <h4></h4>
      <h4></h4>
      <h4></h4>
      <h4>user.streaming</h4>
    </div>
  );
};

export default StreamerDisplay;
