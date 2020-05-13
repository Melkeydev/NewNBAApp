import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
} from "reactstrap";
import { LoadPlayerStatChart } from "./LoadPlayerStatChart";

export const LoadStatDropdown = () => {
  const [stat, setStat] = useState("pts");

  const onClick = (e) => {
    setStat(e.target.value);
  };

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
          <DropdownItem value="reb" onClick={(e) => onClick(e)}>
            Rebounds
          </DropdownItem>
          <DropdownItem value="ast" onClick={(e) => onClick(e)}>
            Assists
          </DropdownItem>
          <DropdownItem value="stl" onClick={(e) => onClick(e)}>
            Steals
          </DropdownItem>
          <DropdownItem value="blk" onClick={(e) => onClick(e)}>
            Blocks
          </DropdownItem>
          <DropdownItem value="fgm" onClick={(e) => onClick(e)}>
            field goals made
          </DropdownItem>
          <DropdownItem value="fg3m" onClick={(e) => onClick(e)}>
            Three points made
          </DropdownItem>
          <DropdownItem value="ftm" onClick={(e) => onClick(e)}>
            free throw made
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <LoadPlayerStatChart statChoice={stat} />
    </div>
  );
};
