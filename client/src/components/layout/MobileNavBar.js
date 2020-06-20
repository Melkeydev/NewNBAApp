import React from "react";
import { Popover, Button } from "antd";

import { MenuOutlined } from "@ant-design/icons";

export const MobileNavBar = () => {
  return (
    <div>
      <Popover
        placement="bottom"
        title={"text"}
        content={"content"}
        trigger="click"
      >
        <Button icon={<MenuOutlined />}></Button>
      </Popover>
    </div>
  );
};
