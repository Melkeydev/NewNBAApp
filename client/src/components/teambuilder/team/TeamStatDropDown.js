import React, { useState } from "react";
import { DisplayBar } from "./DisplayBar";

//antD
import { Menu, Dropdown, Button } from "antd";

export const TeamStatDropDown = () => {
  const [statState, setStatState] = useState("pts");
  const [text, setText] = useState("Stats");

  const menu = (
    <Menu
      onClick={(e) => {
        setStatState(e.key);
        setText(e.item.props.text);
      }}
    >
      <Menu.Item key="pts" text="Points">
        Points
      </Menu.Item>
      <Menu.Item key="reb" text="Rebounds">
        Rebounds
      </Menu.Item>
      <Menu.Item key="ast" text="Assist">
        Assists
      </Menu.Item>
      <Menu.Item key="stl" text="Steals">
        Steals
      </Menu.Item>
      <Menu.Item key="blk" text="Blocks">
        Blocks
      </Menu.Item>
      <Menu.Item key="fgm" text="Field Goals Made">
        Field Goals Made
      </Menu.Item>
      <Menu.Item key="fg3m" text="Three Points Made">
        Three Points Made
      </Menu.Item>
      <Menu.Item key="ftm" text="Free Throws Made">
        Free Throws Made
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <Button>{text}</Button>
      </Dropdown>
      <DisplayBar stat_={statState} />
    </div>
  );
};
