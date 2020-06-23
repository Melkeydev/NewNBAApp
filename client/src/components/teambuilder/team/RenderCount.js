import React from "react";
import { useSelector } from "react-redux";
import { PlayerRow } from "./PlayerRow";
import { CalculateAverages } from "./CalculateAverages";

//css
import "../css/RenderCount.css";

export const RenderCount = () => {
  const TeamPlayers = useSelector((state) => state.Team.teamPlayers);

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
          {TeamPlayers.map((player, i) => (
            <PlayerRow player={player[1]} teamPlayers={player[0]} key={i} />
          ))}
        </tbody>
      </table>
      <CalculateAverages />
    </div>
  );
};
