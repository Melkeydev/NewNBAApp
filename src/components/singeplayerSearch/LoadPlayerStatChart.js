import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

export const LoadPlayerStatChart = ({ statChoice }) => {
  const { lastTen } = useSelector((state) => state.Player);

  const setData = () => {
    var data_list = [];
    lastTen.map((stat, index) => {
      const statChartObject = {
        pts: { x: index, y: stat.pts },
        reb: { x: index, y: stat.reb },
        ast: { x: index, y: stat.ast },
        blk: { x: index, y: stat.blk },
        fgm: { x: index, y: stat.fgm },
        fg3m: { x: index, y: stat.fg3m },
        ftm: { x: index, y: stat.ftm },
        stl: { x: index, y: stat.stl },
      };
      var display_stat = statChartObject[statChoice];

      return data_list.push(display_stat);
    });
    return data_list.reverse();
  };

  return (
    <div>
      {" "}
      <LineChart
        width={1000}
        height={450}
        data={setData()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};
