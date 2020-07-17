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

export const TrueShooting = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  const calculateTSA = (loadPlayers) => {
    return loadPlayers[0].map((player) => {
      const TSA = (player.stats[0].fga + 0.44 * player.stats[0].fta).toFixed(2);
      const TS = player.stats[0].pts / (2 * Number(TSA));

      Object.assign(player.stats[0], { ["TS"]: Number(TS) });
      return { [player.id]: { TS } };
    });
  };

  const generateBar = () => {
    return loadPlayers[0].map((player) => {
      const { first_name, last_name, id } = player;
      return (
        <Bar
          name={`${first_name} ${last_name}`}
          dataKey={`${id}.TS`}
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
          data={calculateTSA(loadPlayers)}
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
