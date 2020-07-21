import React from "react";
import { useSelector } from "react-redux";
import { mode, sum_mode } from "../variables";
import { TeamStatDropDown } from "./TeamStatDropDown";
import { RadarCharts } from "./RadarCharts";
import { TeamRadarChart } from "./TeamRadarChart";
import { testData } from "./helpers";
import { Row, Col } from "antd";
//css
import "../css/TeamDisplay.css";

export const TeamDisplay = () => {
  const loadedPlayers = useSelector((state) => state.Team.loadedPlayers);

  return (
    <div style={{ paddingBottom: "4rem" }}>
      <Row justify="center">
        <Col xs={24} md={16}>
          <TeamStatDropDown />
          <TeamRadarChart />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div style={{ paddingTop: "5%" }}>
            {loadedPlayers[0].map((player) => {
              const {
                first_name,
                last_name,
                position,
                id,
                team: { abbreviation },
              } = player;

              const stats = testData(player, sum_mode, id);

              return (
                <div key={id}>
                  <div
                    style={{
                      display: "flex",
                      padding: "1rem",
                      flexDirection: "column",
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
                      color={player.stats[0].color}
                    ></RadarCharts>
                  </div>

                  <Row style={{ overflowX: "auto" }}>
                    <Col xs={24}>
                      <table className="TeamDisplayTable">
                        <thead>
                          <tr>
                            {Object.keys(mode).map((key, i) => {
                              if (key in player.stats[0]) {
                                return (
                                  <th
                                    key={i}
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {mode[key]}
                                  </th>
                                );
                              }
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {Object.keys(mode).map((key, i) => {
                              if (key in player.stats[0]) {
                                return (
                                  <td
                                    key={i}
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {player.stats[0][key]}
                                  </td>
                                );
                              }
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};
