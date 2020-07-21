import React from "react";
import { useSelector } from "react-redux";
import { normalStats } from "./helpers";
import { mode } from "../variables";
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

export const NormalizedStatsChart = ({ stat }) => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  const normalStats_ = normalStats(loadPlayers, mode);

  const object = normalStats_.reduce((obj, item) => {
    Object.assign(obj, item);
    return obj;
  }, {});

  const tester = (players, normalStats, stat = "pts") => {
    return players[0].map((player) => {
      const normalValue =
        (player.stats[0][stat] - normalStats[stat].lowestValues) /
        (normalStats[stat].highestValues - normalStats[stat].lowestValues);
      return { [player.id]: { normalValue } };
    });
  };

  const generateBar = () => {
    return loadPlayers[0].map((player) => {
      const { first_name, last_name, id } = player;
      return (
        <Bar
          key={id}
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.normalValue`}
          fill={player.stats[0].color}
        />
      );
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width={"100%"} height={400}>
        <BarChart
          data={tester(loadPlayers, object, stat)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          {generateBar()}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
