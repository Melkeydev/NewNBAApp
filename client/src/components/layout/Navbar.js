import React, { useState, useEffect } from "react";
import TextLogo from "../../assets/logo/text_logo_gradient.svg";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

//CSS
import "./css/Navbar.css";

//ant.d re-design
import { MobileNavBar } from "./MobileNavBar";
import { Row, Col, Menu } from "antd";
import {
  GithubOutlined,
  LoginOutlined,
  UserAddOutlined,
  SearchOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [checkedCurrent, setCheckedCurrent] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const [width, setWidth] = useState(window.innerWidth);

  /*
    runs once after page reload,
    sets active nav link to current route
  */
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (checkedCurrent) return;

    setCheckedCurrent(true);
  }, [checkedCurrent, location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <Row className="Navbar">
      <Col xs={18} sm={18} md={6}>
        <Menu mode="horizontal" className="NavbarLeft">
          <Menu.Item key="logo" name="home" className="NavbarLink">
            <Link to="/">
              <img src={TextLogo} height="25px" alt={"TextLogo"} />
            </Link>
          </Menu.Item>
        </Menu>
      </Col>

      {width >= 768 ? (
        <Col sm={0} md={18}>
          <Menu mode="horizontal" className="NavbarRight">
            {isLoggedIn && (
              <Menu.Item
                key="singlesearch"
                icon={<SearchOutlined />}
                className="NavbarLink"
              >
                <Link to="single-player">Single Search</Link>
              </Menu.Item>
            )}

            {isLoggedIn && (
              <Menu.Item
                className="NavbarLink"
                key="teambuilding"
                icon={<TeamOutlined />}
              >
                <Link to="/teambuilder">Team Building</Link>
              </Menu.Item>
            )}

            {isLoggedIn && (
              <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                className="NavbarLink"
              >
                <Link to="/" onClick={() => dispatch(logout())}>
                  Logout
                </Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item
                key="login"
                icon={<LoginOutlined />}
                className="NavbarLink"
              >
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}

            {!isLoggedIn && (
              <Menu.Item
                key="register"
                icon={<UserAddOutlined />}
                className="NavbarLink"
              >
                <Link to="/register">Register</Link>
              </Menu.Item>
            )}

            <Menu.Item
              key="mail"
              icon={<GithubOutlined />}
              name="home"
              className="NavbarLink"
            >
              <a href="https://github.com/Amokstakov"> Github</a>
            </Menu.Item>
          </Menu>
        </Col>
      ) : (
        <Col xs={5} sm={5} md={5}>
          <Menu mode="horizontal" style={{ float: "right" }}>
            <MobileNavBar />
          </Menu>
        </Col>
      )}
    </Row>
  );
};
