import React from "react";
import { useSelector } from "react-redux";
import { leagueLeaders } from "../variables";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export const RadarCharts = ({ stats, color }) => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const normalData = (stats, leagueLeaders) => {
    return stats.map((stat) => {
      const normalValue = stat.data / leagueLeaders[stat.mode_];
      return { ...stat, data: normalValue };
    });
  };

  const generateRadar = () => {
    return players.map((player, i) => {
      const { first_name, last_name } = player[1];
      return (
        <Radar
          key={i}
          name={`${first_name} ${last_name}`}
          dataKey={"data"}
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
        cx={150}
        cy={150}
        outerRadius={100}
        width={300}
        height={300}
        data={normalData(stats, leagueLeaders)}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={"mode_"} />

        {generateRadar()}
      </RadarChart>
    </div>
  );
};
