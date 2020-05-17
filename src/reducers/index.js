import { combineReducers } from "redux";
import singlePlayerReducer from "./singplePlayerReducer";
import teamBuilderReducer from "./teamBuilderReducer";
import teamReducer from "./teamReducer";

export default combineReducers({
  Player: singlePlayerReducer,
  TeamReducer: teamBuilderReducer,
  Team: teamReducer,
});
