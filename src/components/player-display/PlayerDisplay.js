import React from "react";
import "./PlayerDisplay.scss";

const PlayerDisplay = ({ user }) => {
  return (
    <div>
      <h3 className="text-center">{user.username}</h3>
      {user.online === false && <h4 className="text-center">Offline</h4>}
      {user.online && <h4 className="text-center">Online</h4>}
      {user.perfs && (
        <div>
          <h4 className="text-center">
            Classical rating: {user.perfs.classical.rating}
          </h4>
          {user.perfs.puzzle && (
            <h4 className="text-center">
              Puzzle rating: {user.perfs.puzzle.rating}
            </h4>
          )}
        </div>
      )}
      <h4></h4>
      <h4></h4>
    </div>
  );
};

export default PlayerDisplay;
