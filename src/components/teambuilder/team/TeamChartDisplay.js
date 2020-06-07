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

export const TeamChartDisplay = () => {
  const { teamLastTen, ids } = useSelector((state) => state.Player);
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

  const objMapping = (state) => {
    return Object.values(
      [].concat(...datas).reduce((a, v) => {
        const {
          pts,
          ast,
          stl,
          blk,
          index,
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
              index,
            },
          },
        };
      }, {})
    );
  };

  console.log(players);
  const generateLine = () => {
    return ids.map((id) => {
      var randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      });
      return (
        <Line
          name={""}
          type="monotone"
          dataKey={`${id}.pts`}
          stroke={randomColor}
        />
      );
    });
  };

  const mapPlayers = () => {
    return players.map((player) => {
      const { first_name, last_name, id } = player[1];
      var randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      });
      return (
        <Line
          name={`${first_name} ${last_name}`}
          type="monotone"
          dataKey={`${id}.pts`}
          stroke={randomColor}
        />
      );
    });
  };

  console.log(mapPlayers());

  //console.log(objMapping());
  const test = objMapping();

  return (
    <div>
      <LineChart
        data={test}
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
        {mapPlayers()}
      </LineChart>
    </div>
  );
};

//Line dataKey="id.value" => this is how i need to set my points but still..

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// <LineChart
//   width={500}
//   height={300}
//   data={data}
//   margin={{
//     top: 5, right: 30, left: 20, bottom: 5,
//   }}
// >
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey="name" />
//   <YAxis />
//   <Tooltip />
//   <Legend />
//   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
// </LineChart>
