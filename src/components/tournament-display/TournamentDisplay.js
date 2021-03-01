import React from "react";
import "./TournamentDisplay.scss";

// let gif = props.gif
const TournamentDisplay = ({ tourney }) => {
  return (
    <div className="tourney-container">
      <h3 className="text-center"> {tourney.title} </h3>
      <img className="tourney" src={tourney.url} />
    </div>
  );
};

export default TournamentDisplay;
