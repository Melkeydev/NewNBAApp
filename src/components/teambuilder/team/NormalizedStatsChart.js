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
} from "recharts";

export const NormalizedStatsChart = ({ stat }) => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const normalStats_ = normalStats(players, mode);

  const object = normalStats_.reduce((obj, item) => {
    Object.assign(obj, item);
    return obj;
  }, {});

  const tester = (players, normalStats, stat = "pts") => {
    return players.map((player) => {
      const normalValue =
        (player[0][stat] - normalStats[stat].lowestValues) /
        (normalStats[stat].highestValues - normalStats[stat].lowestValues);
      return { [player[1].id]: { normalValue } };
    });
  };

  const generateBar = () => {
    return players.map((player) => {
      const { first_name, last_name, id } = player[1];
      return (
        <Bar
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.normalValue`}
          fill="#8884d8"
        />
      );
    });
  };

  //data = {} needs to be in the same format => {player, value}

  return (
    <div>
      Hi
      <BarChart
        width={1000}
        height={450}
        data={tester(players, object, stat)}
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
    </div>
  );
};
