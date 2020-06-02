import { SET_ERROR, REMOVE_ERROR } from "./types";

export const setError = () => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: "",
  });
  setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
};
