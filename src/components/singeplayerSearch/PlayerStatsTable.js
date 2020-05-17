import React from "react";
import { useSelector } from "react-redux";
import { teamNames } from "./variables";

export const PlayerStatsTable = ({ count }) => {
  const { lastTen } = useSelector((state) => state.Player);

  const versusTeam = (team) => {
    if (team.game.visitor_team_id === team.team.id) {
      return <div>{teamNames[team.game.home_team_id]}</div>;
    } else {
      return <div>{teamNames[team.game.visitor_team_id]}</div>;
    }
  };

  return (
    <div>
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Versus</th>
            <th>Pts</th>
            <th>Ast</th>
            <th>Reb</th>
            <th>FG %</th>
            <th>Blk</th>
            <th>Stl</th>
          </tr>
        </thead>
        <tbody>
          {lastTen.slice(0, count).map((stat) => {
            return (
              <tr key={stat.id}>
                <td>
                  {versusTeam(stat)}
                  {stat.game.date.slice(0, 10)}
                </td>
                <td>{stat.pts}</td>
                <td>{stat.ast}</td>
                <td>{stat.reb}</td>
                <td>{stat.fg_pct}</td>
                <td>{stat.blk}</td>
                <td>{stat.stl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
