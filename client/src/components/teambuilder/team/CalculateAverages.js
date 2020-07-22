import React from "react";
import { useSelector } from "react-redux";
import { mode, sum_mode } from "../variables";
import { all } from "./helpers";
import { Link } from "react-router-dom";

//css
import "../css/CalculateAverages.css";

//AntD
import { Button } from "antd";

export const CalculateAverages = () => {
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);
  const averages = all(loadPlayers, mode, sum_mode);

  return (
    <div>
      <table className="AveragesTable">
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
      </table>
      <Link to="/teamdisplay">
        <Button>View Team</Button>
      </Link>
    </div>
  );
};
