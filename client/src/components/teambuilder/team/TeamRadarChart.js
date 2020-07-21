import React from "react";
import { useSelector } from "react-redux";
import { leagueLeaders } from "../variables";
import { sum_mode } from "../variables";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const TeamRadarChart = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  const radarData = (players, mode, leagueLeaders) => {
    return players[0].map((player) => {
      return Object.keys(mode).map((mode_) => {
        const { id } = player;
        const data = player.stats[0][mode_];
        const normalData = data / leagueLeaders[mode_];
        return { mode_, [id]: normalData };
      });
    });
  };

  const data = radarData(loadPlayers, sum_mode, leagueLeaders);

  const andrewData = (data) => {
    const result = {};
    data.flat().forEach((x) => {
      result[x.mode_] = Object.assign({}, result[x.mode_], x);
    });
    return Object.values(result);
  };

  const generateRadar = () => {
    return loadPlayers[0].map((player) => {
      const { first_name, last_name, id } = player;

      const color = player.stats[0].color;
      return (
        <Radar
          key={id}
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
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width={"100%"} height={400}>
        <RadarChart data={andrewData(data)}>
          <PolarGrid />
          <PolarAngleAxis dataKey={"mode_"} />

          {generateRadar()}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
