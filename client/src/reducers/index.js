import { combineReducers } from "redux";
import singlePlayerReducer from "./singplePlayerReducer";
import teamBuilderReducer from "./teamBuilderReducer";
import teamReducer from "./teamReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  Player: singlePlayerReducer,
  TeamReducer: teamBuilderReducer,
  Team: teamReducer,
  Error: errorReducer,
  Auth: authReducer,
  Alert: alertReducer,
});
