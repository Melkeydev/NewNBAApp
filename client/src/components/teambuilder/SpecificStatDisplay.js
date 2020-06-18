import React from "react";
import { useSelector } from "react-redux";
import "./css/StatsDisplay.css";

export const SpecificStatDisplay = ({ positionState, values }) => {
  const Players = useSelector((state) => state.TeamReducer.players);

  const renderBarColor = (acc, cur, key) => {
    if (Players.length > 1) {
      if (cur < acc[key]) {
        return "red";
      } else {
        return "green";
      }
    } else {
      return "white";
    }
  };

  return (
    <div className={`${renderBarColor(positionState, values.v, values.k)}Bar`}>
      {values.key} : {values.v}
    </div>
  );
};
