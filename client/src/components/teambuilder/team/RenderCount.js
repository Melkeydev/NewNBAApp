import React from "react";
import { useSelector } from "react-redux";
import { PlayerRow } from "./PlayerRow";
import { CalculateAverages } from "./CalculateAverages";

//css
import "../css/RenderCount.css";

export const RenderCount = () => {
  const loadedPlayers = useSelector((state) => state.Team.loadedPlayers);

  return (
    <div>
      <table className="RenderCountTable">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {loadedPlayers[0].map((player, i) => (
            <PlayerRow player={player} teamPlayers={player.stats[0]} key={i} />
          ))}
        </tbody>
      </table>
      <CalculateAverages />
    </div>
  );
};
