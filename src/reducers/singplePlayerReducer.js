import {
  FETCH_STATS,
  FETCH_SEASONS,
  FETCH_LAST_TEN,
  REMOVE_STATES_SINGLE,
} from "../actions/types";

const initialState = {
  player: "",
  stats: "",
  loading: true,
  team: "",
  lastTen: "",
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS:
      return {
        ...state,
        player: action.payload[1],
        stats: action.payload[0],
        team: action.payload[1].team,
        loading: false,
      };
    case FETCH_SEASONS:
      return {
        ...state,
        stats: action.payload,
        loading: false,
      };
    case FETCH_LAST_TEN:
      return { ...state, lastTen: action.payload, loading: false };
    case REMOVE_STATES_SINGLE:
      return {
        player: "",
        stats: "",
        loading: true,
        team: "",
        lastTen: "",
      };

    default:
      return state;
  }
}
