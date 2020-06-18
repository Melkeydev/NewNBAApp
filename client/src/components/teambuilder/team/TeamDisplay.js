import React from "react";
import { Table } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { mode, sum_mode } from "../variables";
import { TeamStatDropDown } from "./TeamStatDropDown";
import { RadarCharts } from "./RadarCharts";
import { TeamRadarChart } from "./TeamRadarChart";
import { testData } from "./helpers";

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
        {players.map((player) => {
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
            <div>
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

              <Table>
                <thead>
                  <tr>
                    {Object.keys(mode).map((key) => {
                      if (key in player[0]) {
                        return (
                          <th style={{ textAlign: "center" }}>{mode[key]}</th>
                        );
                      }
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.keys(mode).map((key) => {
                      if (key in player[0]) {
                        return (
                          <td style={{ textAlign: "center" }}>
                            {player[0][key]}
                          </td>
                        );
                      }
                    })}
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
