import React from "react";
import "./CPuzzleDisplay.scss";

const CPuzzleDisplay = ({ cPuzzle }) => {
  const [error, setError] = useState("");

  async function getCPuzzle() {
    const url = `https://api.chess.com/pub/puzzle`;
    try {
      setError("");
      let response = await fetch(url);
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
    <div className="c-puzzle-container">
      <h3 className="text-center"></h3>
      <button onClick={getCPuzzle()}>Retrieve</button>
    </div>
  );
};

export default CPuzzleDisplay;
