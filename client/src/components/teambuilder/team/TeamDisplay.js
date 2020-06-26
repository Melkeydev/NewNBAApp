import React from "react";
import { useSelector } from "react-redux";
import { mode, sum_mode } from "../variables";
import { TeamStatDropDown } from "./TeamStatDropDown";
import { RadarCharts } from "./RadarCharts";
import { TeamRadarChart } from "./TeamRadarChart";
import { testData } from "./helpers";

//css
import "../css/TeamDisplay.css";

export const TeamDisplay = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TeamStatDropDown></TeamStatDropDown>
        <TeamRadarChart />
      </div>

      <div style={{ paddingTop: "5%" }}>
        {players.map((player, i) => {
          const {
            first_name,
            last_name,
            position,
            id,
            team: { abbreviation },
          } = player[1];

          const stats = testData(player, sum_mode, id);

          //Cant put function call here :(

          return (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h2>
                  {first_name} {last_name}
                </h2>

                <h5>
                  Position: {position} | Team: {abbreviation}
                </h5>
                <RadarCharts
                  style={{ marginLeft: "auto" }}
                  id={id}
                  stats={stats}
                  color={player[2]}
                ></RadarCharts>
              </div>

              <table className="TeamDisplayTable">
                <thead>
                  <tr>
                    {Object.keys(mode).filter(key => key in player[0]).map((key, i) => (
                      <th style={{ textAlign: "center" }} key={i}>
                        {mode[key]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.keys(mode).filter(key => key in player[0]).map((key, i) => (
                      <td style={{ textAlign: "center" }} key={i}>
                        {player[0][key]}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
