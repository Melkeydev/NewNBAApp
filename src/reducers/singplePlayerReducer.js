import { FETCH_STATS } from "../actions/types";

const initialState = {
  player: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS:
      return { ...state, player: action.payload };
    default:
      return state;
  }
}
