import { LOGIN_ALERT, REMOVE_ERROR } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ALERT:
      return [...state, action.payload];

    case REMOVE_ERROR:
      return [];
    default:
      return state;
  }
}
