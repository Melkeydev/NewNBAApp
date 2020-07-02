import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const TeamChartDisplay = ({ stat }) => {
  const { teamLastTen } = useSelector((state) => state.Player);
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  //data is an array of arrays
  const datas = teamLastTen.map((lastTen) => {
    return lastTen.map((obj, index) => {
      return { ...obj, index: index };
    });
  });

  const objMapping = () => {
    return Object.values(
      [].concat(...datas).reduce((a, v) => {
        const {
          pts,
          ast,
          stl,
          blk,
          index,
          reb,
          fgm,
          fg3m,
          ftm,
          player: { id },
        } = v;
        const last = a[index];
        return {
          ...a,
          [index]: {
            ...last,
            [id]: {
              pts,
              ast,
              stl,
              blk,
              reb,
              fgm,
              fg3m,
              ftm,
              index,
            },
          },
        };
      }, {})
    );
  };

  const mapPlayers = (stat = "pts") => {
    return players.map((player) => {
      const { first_name, last_name, id } = player[1];
      return (
        <Line
          name={`${first_name} ${last_name}`}
          type="monotone"
          dataKey={`${id}.${stat}`}
          stroke={player[2]}
        />
      );
    });
  };

  return (
    <div>
      <LineChart
        data={objMapping()}
        width={1000}
        height={450}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow={false}
          dataKey={"index"}
          tick={false}
          allowDuplicatedCategories={true}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        {mapPlayers(stat)}
      </LineChart>
    </div>
  );
};
