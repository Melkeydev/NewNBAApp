import React from "react";
import { useSelector } from "react-redux";
import { mode, sum_mode, leagueLeaders } from "../variables";
import { all } from "./helpers";

//css
import "../css/AverageAlert.css";

export const AverageAlert = () => {
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);
  const averages = all(loadPlayers, mode, sum_mode);

  const averageCalc = (averages, leagueLeaders) => {
    return averages.map((average) => {
      if (leagueLeaders.hasOwnProperty(average.mode)) {
        const avg = Number(average.avg);
        if (avg < 0.5 * leagueLeaders[average.mode]) {
          return average.mode;
        }
      }
    });
  };

  const averageAlert = averageCalc(averages, leagueLeaders);

  const averageMap = (avg, i) => {
    return (
      <p key={i} className="AlertIndicator">
        Team lacks in {avg}
      </p>
    );
  };

  return (
    <div className="AverageAlert">
      {averageAlert.filter(Boolean).map(averageMap)}
    </div>
  );
};
