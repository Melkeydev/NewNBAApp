import React from "react";
import { useSelector } from "react-redux";
import { sum_mode } from "../variables";
import { modeData } from "./helpers";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export const RadarCharts = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const createData = (mode, players) => {
    return Object.keys(mode).map((mode_) => {
      let data = modeData(players, mode_);
      data = data[0].toFixed(0);

      return { mode_, data };
    });
  };

  const createNormalData = (mode, players, sum, low) => {
    return Object.keys(mode).map((mode_) => {
      let data = modeData(players, mode_);
      data = data[0];

      const normalData = (data - low) / (sum - low);

      return { mode_, normalData };
    });
  };

  const getSum = (createData) => {
    return createData.reduce((acc, sum) => parseFloat(sum.data) + acc, 0);
  };

  const getLowest = (data_) => {
    return Math.min(...data_.map((o) => parseInt(o.data)));
  };

  const generateRadar = () => {
    return players.map((player) => {
      const { first_name, last_name } = player[1];
      return (
        <Radar
          name={`${first_name} ${last_name}`}
          dataKey="normalData"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      );
    });
  };

  return (
    <div>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={createNormalData(
          sum_mode,
          players,
          getSum(createData(sum_mode, players)),
          getLowest(createData(sum_mode, players))
        )}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="mode_" />
        <PolarRadiusAxis />
        {generateRadar()}
      </RadarChart>
    </div>
  );
};
