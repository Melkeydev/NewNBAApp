import { SET_ERROR, REMOVE_ERROR } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return [...state, action.payload];

    case REMOVE_ERROR:
      return [];
    default:
      return state;
  }
}
