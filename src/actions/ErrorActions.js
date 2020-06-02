import { SET_ERROR, REMOVE_ERROR, LOGIN_ALERT } from "./types";

export const setError = (msg) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: msg,
  });
  setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
};

export const setAlert = () => (dispatch) => {
  dispatch({
    type: LOGIN_ALERT,
    payload: "",
  });
  setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
};
