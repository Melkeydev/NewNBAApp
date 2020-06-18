import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const FieldGoalPer = ({ Made, Attempted }) => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const calculateFGP = (players, Made, Attempted) => {
    return players.map((player) => {
      const FieldRatio = Number(
        (player[0][Made] / player[0][Attempted]).toFixed(2)
      );
      return { [player[1].id]: { FieldRatio } };
    });
  };

  const generateBar = () => {
    return players.map((player) => {
      const { first_name, last_name, id } = player[1];
      return (
        <Bar
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.FieldRatio`}
          fill={player[2]}
        />
      );
    });
  };

  return (
    <div>
      <BarChart
        width={1000}
        height={450}
        data={calculateFGP(players, Made, Attempted)}
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
