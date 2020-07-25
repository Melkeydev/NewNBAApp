import React from "react";
import { Popover, Button } from "antd";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

//css
import "./css/MobileNavBar.css";

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
    <div className="MobileNavBar">
      <Popover placement="bottom" content={content} trigger="click">
        <Button
          style={{ backgroundColor: "#d182ac" }}
          icon={<MenuOutlined style={{ backgroundColor: "#d182ac" }} />}
        ></Button>
      </Popover>
    </div>
  );
};
