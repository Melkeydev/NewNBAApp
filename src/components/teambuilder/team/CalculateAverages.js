import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mode, sum_mode } from "../variables";
import { all, normalStats } from "./helpers";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const CalculateAverages = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const averages = all(players, mode, sum_mode);
  const normalStats_ = normalStats(players, mode);

  const tester = (players, normalStats) => {
    return players.map((player) => {
      console.log(player[0].pts);
      console.log(normalStats[0].pts);
      console.log(player[0].pts - normalStats[0].pts.lowestValues);
      const normalValue =
        (player[0].pts - normalStats[0].pts.lowestValues) /
        (normalStats[0].pts.highestValues - normalStats[0].pts.lowestValues);
      return { [player[1].last_name]: { normalValue } };
    });
  };

  console.log(tester(players, normalStats_));

  return (
    <div>
      <Table size="small">
        <thead>
          <tr>
            <th>Stats</th>
            <th>Team Average</th>
            <th>Team Totals</th>
          </tr>
        </thead>
        <tbody>
          {averages.map((average, i) => {
            return (
              <tr key={i}>
                <td>{mode[average.mode]}</td>
                <td>{average.avg}</td>
                <td>{average.sum}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/teamdisplay">
        <Button>View Team</Button>
      </Link>
    </div>
  );
};
