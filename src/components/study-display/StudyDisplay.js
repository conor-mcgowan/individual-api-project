import React from "react";
import "./StudyDisplay.scss";

const StudyDisplay = ({ study }) => {
  return (
    <div className="study-container">
      <h3 className="text-center"> {study.title} </h3>
      <img className="study" src={study.url} />
    </div>
  );
};

export default StudyDisplay;
