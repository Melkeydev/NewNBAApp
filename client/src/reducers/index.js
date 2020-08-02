import { combineReducers } from "redux";
import singlePlayerReducer from "./singplePlayerReducer";
import teamBuilderReducer from "./teamBuilderReducer";
import teamReducer from "./teamReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";


const appReducer = combineReducers({
  Player: singlePlayerReducer,
  TeamReducer: teamBuilderReducer,
  Team: teamReducer,
  Error: errorReducer,
  Auth: authReducer,
  Alert: alertReducer,
})

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined
  }

  return appReducer(state,action)
}

export default rootReducer
