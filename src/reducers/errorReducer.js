import { SET_ERROR, REMOVE_ERROR } from "../actions/types";

const initialState = {
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: `${action.payload} is not a basketball player - please check spelling`,
      };

    case REMOVE_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
}
