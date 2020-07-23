import React, { useEffect } from "react";
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
import setAuthToken from "../src/utils/setAuthToken";
import { loadUser } from "./actions/AuthAction";
import { Footer } from "./components/layout/Footer";
//redux
import { Provider } from "react-redux";
import store from "./store";

//css
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
