import React from "react";
import { Popover, Button } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const MobileNavBar = () => {
  const content = (
    <Menu>
      <Menu.Item key="teambuilding">
        <Link to="/teambuilder">Team Building</Link>
      </Menu.Item>
      <Menu.Item key="singlesearch">
        <Link to="single-player">Single Search</Link>
      </Menu.Item>
      <Menu.Item key="github">Github</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Popover placement="bottom" content={content} trigger="click">
        <Button icon={<MenuOutlined />}></Button>
      </Popover>
    </div>
  );
};
