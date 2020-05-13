import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Searchbar from "./components/singeplayerSearch/Searchbar";
import TeamBuilder from "./components/teambuilder/TeamBuilder";
import { Homepage } from "./components/layout/Homepage";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/*NavBar*/}
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/single-player" component={Searchbar}></Route>
        <Route exact path="/teambuilder" component={TeamBuilder}></Route>
      </Router>
    </Provider>
  );
}

export default App;
