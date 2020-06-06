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
  const { teamLastTen } = useSelector((state) => state.Player);

  //data = {X: 'games', LukaRebs 4000, LebronRebos: 2400, OtherPlayerRebs: 2400},

  //console.log(teamLastTen);

  //data is an array of arrays
  // const datas = teamLastTen.map((lastTen) => {
  //   return lastTen.map((obj, index) => {
  //     return { ...obj, index: index };
  //   });
  // });

  //const mergedData = data.flat();

  // const testData = [
  //   { index: 0, reb: 77 },
  //   { index: 1, reb: 22 },
  //   { index: 2, reb: 44 },
  //   { index: 3, reb: 17 },
  //   { index: 4, reb: 99 },
  //   { index: 5, reb: 30 },
  //   { index: 6, reb: 11 },
  // ];

  var data = [
    {
      items: [
        { index: 0, reb: 77 },
        { index: 1, reb: 22 },
        { index: 2, reb: 44 },
        { index: 3, reb: 17 },
        { index: 4, reb: 99 },
        { index: 5, reb: 30 },
        { index: 6, reb: 11 },
      ],
      items2: [
        { index: 0, reb: 77 },
        { index: 1, reb: 22 },
        { index: 2, reb: 44 },
        { index: 3, reb: 17 },
        { index: 4, reb: 99 },
        { index: 5, reb: 30 },
        { index: 6, reb: 11 },
      ],
    },
  ];

  return (
    <div>
      <LineChart
        data={data[0].items}
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
          dataKey={"index"}
          tick={false}
          allowDuplicatedCategories={false}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="reb" data={data[0].items} />
        <Line type="monotone" dataKey="reb" data={data[0].items2} />
      </LineChart>
    </div>
  );
};

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
