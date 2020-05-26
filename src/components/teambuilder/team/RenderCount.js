import React from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { PlayerRow } from "./PlayerRow";
import { LeagueAverage } from "./LeagueAverage";
import { CalculateAverages } from "./CalculateAverages";

export const RenderCount = () => {
  const TeamPlayers = useSelector((state) => state.Team.teamPlayers);

  return (
    <div>
      <Table size="small">
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
      </Table>
      <CalculateAverages />
    </div>
  );
};
