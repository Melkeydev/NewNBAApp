import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  return (
    <div>
      <Menu>
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Menu.Menu position="right">
          {isLoggedIn && (
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Button onClick={() => dispatch(logout())}>Logout</Button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button>Login</Button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button>Register</Button>
            </Link>
          )}
        </Menu.Menu>
      </Menu>
    </div>
  );
};
