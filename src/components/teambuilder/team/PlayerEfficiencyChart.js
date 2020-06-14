import React from "react";
import { useSelector } from "react-redux";
import { normalStats, createMissStats } from "./helpers";
import { mode, weights } from "../variables";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const PlayerEfficiencyChart = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  const playerStats = createMissStats(players, weights);
  console.log(playerStats.flat());

  return <div>Hi</div>;
};
