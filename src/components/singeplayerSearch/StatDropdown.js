import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
} from "reactstrap";
import { PlayerStatChart } from "./PlayerStatChart";

export const StatDropdown = ({ count }) => {
  const [stat, setStat] = useState("pts");

  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            value="pts"
            onClick={(e) => console.log(e.target.value)}
          >
            Points
          </DropdownItem>
          <DropdownItem value="reb" onClick={(e) => setStat(e.target.value)}>
            Rebounds
          </DropdownItem>
          <DropdownItem value="ast" onClick={(e) => setStat(e.target.value)}>
            Assists
          </DropdownItem>
          <DropdownItem value="stl" onClick={(e) => setStat(e.target.value)}>
            Steals
          </DropdownItem>
          <DropdownItem value="blk" onClick={(e) => setStat(e.target.value)}>
            Blocks
          </DropdownItem>
          <DropdownItem value="fgm" onClick={(e) => setStat(e.target.value)}>
            field goals made
          </DropdownItem>
          <DropdownItem value="fg3m" onClick={(e) => setStat(e.target.value)}>
            Three points made
          </DropdownItem>
          <DropdownItem value="ftm" onClick={(e) => setStat(e.target.value)}>
            free throw made
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <PlayerStatChart statChoice={stat} count={count} />
    </div>
  );
};
