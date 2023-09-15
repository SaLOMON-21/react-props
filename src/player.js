//liste des joueurs
import React from "react";
import Player from "./Player1";
import players from "./player2";

const PlayersList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
