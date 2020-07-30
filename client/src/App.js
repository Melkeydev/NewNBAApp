import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbar from "./components/singeplayerSearch/Searchbar";
import TeamBuilder from "./components/teambuilder/TeamBuilder";
import { Error } from "./components/layout/Error";
import { Navbar } from "./components/layout/Navbar";
import { Homepage } from "./components/layout/Homepage";
import { RegisterForm } from "./components/Auth/RegisterForm";
import { LoginForm } from "./components/Auth/LoginForm";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { TeamDisplay } from "./components/teambuilder/team/TeamDisplay";
import { loadUser } from "./actions/AuthAction";
import { Footer } from "./components/layout/Footer";
//redux
import { Provider, useDispatch, useSelector } from "react-redux";

//css
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Error />
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Switch>
          <PrivateRoute exact path="/single-player" component={Searchbar} />
          <PrivateRoute exact path="/teambuilder" component={TeamBuilder} />
          <PrivateRoute exact path="/teamdisplay" component={TeamDisplay} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
