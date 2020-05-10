import React from "react";
import Searchbar from "./components/singeplayerSearch/Searchbar";
//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Searchbar></Searchbar>
    </Provider>
  );
}

export default App;
