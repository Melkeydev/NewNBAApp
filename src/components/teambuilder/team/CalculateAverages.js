import React from "react";
import { useSelector } from "react-redux";
import { mode } from "../variables";
import { all } from "./helpers";
import { Table } from "semantic-ui-react";

export const CalculateAverages = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const averages = all(players, mode);

  return (
    <div>
      <Table size="small">
        <thead>
          <tr>
            <th>League Average</th>
            <th>Team Average</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr> </tr>
          {averages.map((average) => {
            return (
              <tr>
                <td>"points": 30</td>
                <td>
                  {mode[average.mode]} {average.avg}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

// {
//   TeamPlayers.map((player, i) => (
//     <PlayerRow player={player[1]} teamPlayers={player[0]} key={i} />
//   ));
// }
