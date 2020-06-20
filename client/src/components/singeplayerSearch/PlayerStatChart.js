import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

export const PlayerStatChart = ({ statChoice, count }) => {
  const { lastTen } = useSelector((state) => state.Player);

  const setData = () => {
    var data_list = [];
    lastTen.slice(0, count).map((stat, index) => {
      const statChartObject = {
        pts: { x: index, Games: stat.pts },
        reb: { x: index, Games: stat.reb },
        ast: { x: index, Games: stat.ast },
        blk: { x: index, Games: stat.blk },
        fgm: { x: index, Games: stat.fgm },
        fg3m: { x: index, Games: stat.fg3m },
        ftm: { x: index, Games: stat.ftm },
        stl: { x: index, Games: stat.stl },
      };
      var display_stat = statChartObject[statChoice];

      return data_list.push(display_stat);
    });
    return data_list.reverse();
  };

  return (
    <div style={{ width: "100%" }}>
      <h3
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Last {count} games
      </h3>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart
          data={setData()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Games"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
