import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn } = useSelector((state) => state.Auth);

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const renderComponent = (routeProps) => {
    return <Component {...routeProps} />;
  };

  return <Route {...props} render={renderComponent} />;

  //   if(!isLoggedIn) {
  //       return <Redirect to="/login" />
  //   }
};
