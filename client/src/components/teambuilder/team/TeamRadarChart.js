import React from "react";
import { useSelector } from "react-redux";
import { leagueLeaders } from "../variables";
import { sum_mode } from "../variables";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend } from "recharts";

export const TeamRadarChart = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const radarData = (players, mode, leagueLeaders) => {
    return players.map((player) => {
      return Object.keys(mode).map((mode_) => {
        const { id } = player[1];
        const data = player[0][mode_];
        const normalData = data / leagueLeaders[mode_];
        return { mode_, [id]: normalData };
      });
    });
  };

  const data = radarData(players, sum_mode, leagueLeaders);

  const andrewData = (data) => {
    const result = {};
    data.flat().forEach((x) => {
      result[x.mode_] = Object.assign({}, result[x.mode_], x);
    });
    return Object.values(result);
  };

  const generateRadar = () => {
    return players.map((player) => {
      const { first_name, last_name, id } = player[1];

      const color = player[2];
      return (
        <Radar
          name={`${first_name} ${last_name}`}
          dataKey={id}
          stroke={color}
          fill={color}
          fillOpacity={0.6}
        />
      );
    });
  };
  return (
    <div>
      <RadarChart
        cx={200}
        cy={200}
        outerRadius={150}
        width={400}
        height={400}
        data={andrewData(data)}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={"mode_"} />

        {generateRadar()}
        <Legend />
      </RadarChart>
    </div>
  );
};
