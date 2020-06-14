import React, { useState, useCallback, useEffect } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [ checkedCurrent, setCheckedCurrent] = useState(false);
  const [ active, setActive ] = useState();
  const { isLoggedIn } = useSelector((state) => state.Auth);

  /*
    runs once after page reload,
    sets active nav link to current route
  */
  useEffect(() => {
    if (checkedCurrent) return;

    const currentRoute = location.pathname.replace("/", "");

    setActive(currentRoute || "home");
    setCheckedCurrent(true);
  }, [checkedCurrent, location.pathname]);

  const handleClick = useCallback((_, { name }) => setActive(name), []);

  return (
    <Menu stackable>
      <Menu.Item
        as={Link} to="/"
        name="home"
        onClick={handleClick}
        active={active === "home"}
      >
        Home
      </Menu.Item>
      <Menu.Item
        as={Link} to="single-player"
        name="single-player"
        onClick={handleClick}
        active={active === "single-player"}
      >
        Detailed Search
      </Menu.Item>
      <Menu.Item
        as={Link} to="/teambuilder"
        name="teambuilder"
        onClick={handleClick}
        active={active === "teambuilder"}
      >
        Build a Team
      </Menu.Item>

      <Menu.Menu position="right">
        {isLoggedIn && (
          <Menu.Item
            as={Link} to="/"
            name=""
            onClick={handleClick}
          >
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          </Menu.Item>
        )}
        {!isLoggedIn && (
          <Menu.Item
            as={Link} to="/login"
            name="login"
            onClick={handleClick}
            active={active === "login"}
          >
            <Button>Login</Button>
          </Menu.Item>
        )}
        {!isLoggedIn && (
          <Menu.Item
            as={Link} to="/register"
            name="register"
            onClick={handleClick}
            active={active === "register"}
          >
            <Button primary>Register</Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};
