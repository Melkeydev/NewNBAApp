import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mode, sum_mode } from "../variables";
import { all } from "./helpers";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const CalculateAverages = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const averages = all(players, mode, sum_mode);

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
