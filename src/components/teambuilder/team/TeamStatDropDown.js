import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { TeamChartDisplay } from "./TeamChartDisplay";

export const TeamStatDropDown = () => {
  const [statState, setStatState] = useState("pts");

  const options = [
    { key: 1, text: "Points", value: "pts" },
    { key: 2, text: "Rebounds", value: "reb" },
    { key: 3, text: "Assists", value: "ast" },
    { key: 4, text: "Steals", value: "stl" },
    { key: 5, text: "Blocks", value: "blk" },
    { key: 6, text: "Fiel Goals Made", value: "fgm" },
    { key: 7, text: "Three Points Made", value: "fg3m" },
    { key: 8, text: "Free Throws Made", value: "ftm" },
  ];

  return (
    <div>
      <Dropdown
        options={options}
        placeholder="points"
        onChange={(_, { value }) => setStatState(value)}
      ></Dropdown>
      <TeamChartDisplay stat={statState}></TeamChartDisplay>
    </div>
  );
};
