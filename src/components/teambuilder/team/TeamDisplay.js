import React from "react";
import { Table } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { mode } from "../variables";
import { TeamStatDropDown } from "./TeamStatDropDown";

export const TeamDisplay = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  return (
    <div>
      <TeamStatDropDown></TeamStatDropDown>
      <div style={{ paddingTop: "5%" }}>
        {players.map((player) => {
          const {
            first_name,
            last_name,
            position,
            team: { abbreviation },
          } = player[1];
          //Cant put function call here :(

          return (
            <div>
              <h2>
                {first_name} {last_name}
              </h2>

              <h5>
                Position: {position} | Team: {abbreviation}
              </h5>

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
