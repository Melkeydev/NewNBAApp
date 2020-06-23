import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

//ant.d re-design
import { MobileNavBar } from "./MobileNavBar";
import { Row, Col, Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [ checkedCurrent, setCheckedCurrent ] = useState(false);
  // const [ active, setActive ] = useState();
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  /*
    runs once after page reload,
    sets active nav link to current route
  */
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (checkedCurrent) return;

    // const currentRoute = location.pathname.replace("/", "");

    // setActive(currentRoute || "home");
    setCheckedCurrent(true);
  }, [checkedCurrent, location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  // const handleClick = useCallback((_, { key }) => setActive(key), []);
  const handleClick = (e) => {
    console.log(e.key);
  };

  return (
    <Row>
      <Col sm={24} md={6}>
        <Menu mode="horizontal" style={{ float: "left" }} onClick={handleClick}>
          <Menu.Item key="logo" icon={<MailOutlined />} name="home"></Menu.Item>
        </Menu>
      </Col>

      {width > 600 ? (
        <Col sm={0} md={18}>
          <Menu
            mode="horizontal"
            style={{ float: "right" }}
            onClick={handleClick}
          >
            {!isLoggedIn && (
              <Menu.Item key="singlesearch">
                <Link to="single-player">Single Search</Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item key="teambuilding">
                <Link to="/teambuilder">Team Building</Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item key="alipay">
                <Link to="/" onClick={() => dispatch(logout())}>
                  Logout
                </Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item key="login">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item key="register">
                <Link to="/register">Register</Link>
              </Menu.Item>
            )}

            <Menu.Item key="mail" icon={<MailOutlined />} name="home">
              Navigation One
            </Menu.Item>
          </Menu>
        </Col>
      ) : (
        <Col xs={20} sm={0} md={18}>
          <Menu
            mode="horizontal"
            style={{ float: "right" }}
            onClick={handleClick}
          >
            <MobileNavBar />
          </Menu>
        </Col>
      )}
    </Row>
  );
};
