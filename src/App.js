import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Searchbar from "./components/singeplayerSearch/Searchbar";
import TeamBuilder from "./components/teambuilder/TeamBuilder";
import { Error } from "./components/layout/Error";
import { Homepage } from "./components/layout/Homepage";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Error />
      <Router>
        {/*NavBar*/}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/single-player" component={Searchbar} />
        <Route exact path="/teambuilder" component={TeamBuilder} />
      </Router>
    </Provider>
  );
}

export default App;
