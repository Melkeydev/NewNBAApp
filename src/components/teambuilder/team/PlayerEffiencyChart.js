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

export const PlayerEffiencyChart = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  return <div></div>;
};
