import { combineReducers } from "redux";
import singlePlayerReducer from "./singplePlayerReducer";
import teamBuilderReducer from "./teamBuilderReducer";

export default combineReducers({
  Player: singlePlayerReducer,
  Team: teamBuilderReducer,
});
