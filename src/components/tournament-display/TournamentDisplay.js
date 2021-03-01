import React from "react";
import "./TournamentDisplay.scss";

const TournamentDisplay = ({ tourney }) => {
  return (
    <div className="tourney-container">
      <h3 className="text-center"> {tourney.title} </h3>
      <img className="tourney" src={tourney.url} />
    </div>
  );
};

export default TournamentDisplay;
