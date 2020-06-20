import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { PlayerStatChart } from "./PlayerStatChart";

export const StatDropdown = ({ count }) => {
  const [stat, setStat] = useState("pts");

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
    <div style={{ width: "100%" }}>
      <Dropdown
        options={options}
        placeholder="Points"
        onChange={(_, { value }) => setStat(value)}
      ></Dropdown>
      <PlayerStatChart statChoice={stat} count={count} />
    </div>
  );
};
