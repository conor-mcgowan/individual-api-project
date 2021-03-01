import React from "react";
import "./StudyDisplay.scss";

// let gif = props.gif
const StudyDisplay = ({ study }) => {
  return (
    <div className="study-container">
      <h3 className="text-center"> {gif.title} </h3>
      <img className="study" src={gif.url} />
    </div>
  );
};

export default StudyDisplay;
