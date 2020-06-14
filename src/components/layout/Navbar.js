import React, { useState, useCallback } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  const [ active, setActive ] = useState("home");
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const handleClick = useCallback((_, { name }) => setActive(name), []);

  return (
    <div>
      <Menu stackable>
        <Menu.Item
          name="home"
          onClick={handleClick}
          active={active === "home"}
        >
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Menu.Item>
        <Menu.Item
          name="singlePlayer"
          onClick={handleClick}
          active={active === "singlePlayer"}
        >
          <Link to="/single-player">
            <Button>Detailed Search</Button>
          </Link>
        </Menu.Item>
        <Menu.Item
            name="teamBuilder"
            onClick={handleClick}
            active={active === "teamBuilder"}
          >
          <Link to="/teambuilder">
            <Button>Build a Team</Button>
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          {isLoggedIn && (
            <Menu.Item
                name="home"
                onClick={handleClick}
              >
              <Link to="/">
                <Button onClick={() => dispatch(logout())}>Logout</Button>
              </Link>
            </Menu.Item>
          )}
          {!isLoggedIn && (
            <Menu.Item
                name="login"
                onClick={handleClick}
                active={active === "login"}
              >
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </Menu.Item>
          )}
          {!isLoggedIn && (
            <Menu.Item
                name="register"
                onClick={handleClick}
                active={active === "register"}
              >
              <Link to="/register">
                <Button primary>Register</Button>
              </Link>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    </div>
  );
};
