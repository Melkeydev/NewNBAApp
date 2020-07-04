import React, { useState, useEffect } from "react";
import TextLogo from "../../assets/logo/text_logo_gradient.svg";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

//ant.d re-design
import { MobileNavBar } from "./MobileNavBar";
import { Row, Col, Menu } from "antd";
import {
    GithubOutlined,
    LoginOutlined,
    UserAddOutlined,
    SearchOutlined,
    TeamOutlined,
    LogoutOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

export const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [checkedCurrent, setCheckedCurrent] = useState(false);
    const [active, setActive] = useState();
    const { isLoggedIn } = useSelector(state => state.Auth);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    /*
    runs once after page reload,
    sets active nav link to current route
  */
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        if (checkedCurrent) return;

        const currentRoute = location.pathname.replace("/", "");

        setActive(currentRoute || "home");
        setCheckedCurrent(true);
    }, [checkedCurrent, location.pathname]);

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    const handleClick = e => {
        console.log(e.key);
    };

    return (
        <Row>
            <Col xs={18} sm={18} md={6}>
                <Menu
                    mode="horizontal"
                    style={{ float: "left" }}
                    onClick={handleClick}
                >
                    <Menu.Item key="logo" name="home">
                        <Link to="/">
                            <img src={TextLogo} height="25px" />
                        </Link>
                    </Menu.Item>
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
                            <Menu.Item
                                key="singlesearch"
                                icon={<SearchOutlined />}
                            >
                                <Link to="single-player">Single Search</Link>
                            </Menu.Item>
                        )}

                        {!isLoggedIn && (
                            <Menu.Item
                                key="teambuilding"
                                icon={<TeamOutlined />}
                            >
                                <Link to="/teambuilder">Team Building</Link>
                            </Menu.Item>
                        )}

                        {!isLoggedIn && (
                            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                                <Link to="/" onClick={() => dispatch(logout())}>
                                    Logout
                                </Link>
                            </Menu.Item>
                        )}

                        {!isLoggedIn && (
                            <Menu.Item key="login" icon={<LoginOutlined />}>
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                        )}

                        {!isLoggedIn && (
                            <Menu.Item
                                key="register"
                                icon={<UserAddOutlined />}
                            >
                                <Link to="/register">Register</Link>
                            </Menu.Item>
                        )}

                        <Menu.Item
                            key="mail"
                            icon={<GithubOutlined />}
                            name="home"
                        >
                            Github
                        </Menu.Item>
                    </Menu>
                </Col>
            ) : (
                <Col xs={5} sm={5} md={5}>
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
