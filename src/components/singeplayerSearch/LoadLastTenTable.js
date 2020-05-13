import React from "react";
import { useSelector } from "react-redux";

export const LoadLastTenTable = () => {
  var teamNames = [
    "Buffer",
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Clebeland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State",
    "Houston Rockets",
    "Indianna Pacers",
    "La Clippers",
    "La Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota timberwolves",
    "New Orleans Pelicans",
    "NY Knicks",
    "OKC",
    "Orlando Magic",
    "76",
    "Suns",
    "Blazers",
    "Kings",
    "spurs",
    "raptors",
    "Jazz",
    "Wizards",
  ];

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
          {lastTen.map((stat) => {
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
