import {
  TEAM_FETCH,
  CENTER_FETCH,
  GUARD_FETCH,
  FORWARD_FETCH,
} from "../actions/types";

const initialState = {
  player: "",
  stats: "",
  loading: true,
  team: "",
  forward: "",
  guard: "",
  center: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEAM_FETCH:
      return {
        ...state,
        player: [action.payload[1], ...state.player],
        stats: [action.payload[0], ...state.stats],
        loading: false,
        team: [action.payload[1].team, ...state.team],
      };
    case CENTER_FETCH:
      return {
        ...state,
        center: [action.payload, ...state.center],
      };
    case GUARD_FETCH:
      return {
        ...state,
        guard: [action.payload, ...state.guard],
      };
    case FORWARD_FETCH:
      return {
        ...state,
        forward: [action.payload, ...state.forward],
      };
    default:
      return state;
  }
}
