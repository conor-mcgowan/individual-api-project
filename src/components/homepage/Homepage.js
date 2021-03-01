import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { setSearch } from "../../redux/actions";
// import CPuzzleDisplay from "../c-puzzle-display/CPuzzleDisplay";
import LiPuzzleDisplay from "../li-puzzle-display/LiPuzzleDisplay";
import TournamentDisplay from "../tournament-display/TournamentDisplay";
import StreamerDisplay from "../streamer-display/StreamerDisplay";
import "./HomePage.scss";

const HomePage = (props) => {
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  async function getLiUser() {
    const key = "st4FSa3Ephd23eeb";
    const url = `https://lichess.org/api/user/${query}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      let resUser = json.data.map((val) => {
        return {
          username: val.username,
          online: val.online,
          perfs: val.perfs,
          playtime: val.playTime,
          streaming: val.streaming,
        };
      });
      console.log(url);
      console.log(resUser);
      props.setSearch(resUser);
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
        <h1>Lichess User Search</h1>
        <label htmlFor="user-search">Search by Username </label>
        <input
          id="user-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => getLiUser(query)}>Search</button>
        <article className="results-container">
          {error.length > 0 && <h1>{error}</h1>}
          {error.length === 0 &&
            props.user.map((v) => {
              return <StreamerDisplay user={v} key={v.username} />;
            })}
        </article>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
};

function mapStateToProps(state) {
  return {
    user: state.search,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
