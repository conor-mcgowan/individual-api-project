import React, { useState, useMemo, useContext } from "react";
import CPuzzleDisplay from "../c-puzzle-display/CPuzzleDisplay";
import LiPuzzleDisplay from "../li-puzzle-display/LiPuzzleDisplay";
import TournamentDisplay from "../tournament-display/TournamentDisplay";
import Streamers from "../streamers/Streamers";
import "./HomePage.scss";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const HomePage = (props) => {
  const favorites = useContext(FavoritesContext);
  return (
    <>
      <div>
        <div>
          <h1>Homepage Chess.com Puzzle Area</h1>
        </div>
        <LiPuzzleDisplay></LiPuzzleDisplay>
      </div>
      <div>
        <h1>Homepage Tournament Area</h1>
      </div>
      <div>
        <h1>Homepage Streamer Area</h1>
      </div>
    </>
  );
};

export default HomePage;
