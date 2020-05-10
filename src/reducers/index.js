import { combineReducers } from "redux";
import singlePlayerReducer from "./singplePlayerReducer";

export default combineReducers({
  Player: singlePlayerReducer,
});
