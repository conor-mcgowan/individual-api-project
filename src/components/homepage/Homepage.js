import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { setSearch } from "../../redux/actions";
// import CPuzzleDisplay from "../c-puzzle-display/CPuzzleDisplay";
import LiPuzzleDisplay from "../li-puzzle-display/LiPuzzleDisplay";
import TournamentDisplay from "../tournament-display/TournamentDisplay";
import Streamers from "../streamers/Streamers";
import "./HomePage.scss";

const HomePage = (props) => {
  const [error, setError] = useState("");
  async function getCPuzzle() {
    try {
      setError("");
      let response = await fetch(`https://api.chess.com/pub/puzzle`);
      let json = await response.json();
      let resPuzzle = json.data.map((val) => {
        return {
          title: val.title,
          url: val.url,
          fen: val.fen,
          pgn: val.pgn,
          image: val.image,
        };
      });
      props.setSearch(resPuzzle);
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      props.setSearch([]);
    }
  }

  async function getStreamers() {
    try {
      setError("");
      let response = await fetch(`https://lichess.org/streamer/live`);
      let json = await response.json();
      let resPuzzle = json.data.map((val) => {
        return {
          title: val.title,
          url: val.url,
          fen: val.fen,
          pgn: val.pgn,
          image: val.image,
        };
      });
      props.setSearch(resPuzzle);
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      props.setSearch([]);
    }
  }

  return (
    <>
      <div>
        {/* <div>
          <h1>Homepage Chess.com Puzzle Area</h1>
          <button onClick={getCPuzzle()}>Retrieve</button>
          <div>
            {error.length > 0 && <h1>{error}</h1>}
            {error.length === 0 &&
              props.puzzle.map((v) => {
                return <CPuzzleDisplay puzzle={v} key={title} url={url} />;
              })}
          </div>
        </div> */}
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

const mapDispatchToProps = {
  setSearch,
};

function mapStateToProps(state) {
  return {
    puzzle: state.search,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
