import React from "react";
import { useSelector } from "react-redux";
import { weights } from "../variables";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const PlayerEfficiencyChart = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  const PERCalc = (player, playerWeights) => {
    const PER =
      player["fgm"] * playerWeights["fgm"] +
      player["stl"] * playerWeights["stl"] +
      player["fg3m"] * playerWeights["fg3m"] +
      player["ftm"] * playerWeights["ftm"] +
      player["blk"] * playerWeights["blk"] +
      player["oreb"] * playerWeights["oreb"] +
      player["ast"] * playerWeights["ast"] +
      player["dreb"] * playerWeights["dreb"] -
      player["pf"] * playerWeights["pf"] -
      player["FT_Miss"] * playerWeights["FT_Miss"] -
      player["FG_Miss"] * playerWeights["FG_Miss"] -
      player["turnover"] * playerWeights["turnover"];

    const PER_ = PER * (1 / Number(player["min"].split(":")[0]));
    return PER_;
  };

  const missStates = (players, weights) => {
    return loadPlayers[0].map((player) => {
      const FG_Miss = (player.stats[0].fga - player.stats[0].fgm).toFixed(2);
      const FT_Miss = player.stats[0].fta - player.stats[0].ftm;
      Object.assign(
        player.stats[0],
        { ["FG_Miss"]: Number(FG_Miss) },
        { ["FT_Miss"]: FT_Miss }
      );
      const PER = PERCalc(player.stats[0], weights);
      return { [player.id]: { PER } };
    });
  };

  const generateBar = () => {
    return loadPlayers[0].map((player, i) => {
      const { first_name, last_name, id } = player;
      return (
        <Bar
          key={i}
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.PER`}
          fill={player.stats[0].color}
        />
      );
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width={"100%"} height={400}>
        <BarChart
          width={1000}
          height={450}
          data={missStates(players, weights)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {generateBar()}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
