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
  ResponsiveContainer,
} from "recharts";

export const FieldGoalPer = ({ Made, Attempted }) => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  const calculateFGP = (players, Made, Attempted) => {
    return players[0].map((player) => {
      const FieldRatio = Number(
        (player.stats[0][Made] / player.stats[0][Attempted]).toFixed(2)
      );
      return { [player.id]: { FieldRatio } };
    });
  };

  const generateBar = () => {
    return loadPlayers[0].map((player) => {
      const { first_name, last_name, id } = player;
      return (
        <Bar
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.FieldRatio`}
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
          data={calculateFGP(loadPlayers, Made, Attempted)}
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
