import {
  TEAM_FETCH,
  CENTER_FETCH,
  GUARD_FETCH,
  FORWARD_FETCH,
  REMOVE_CENTER,
  REMOVE_FORWARD,
  REMOVE_GUARD,
} from "../actions/types";

const initialState = {
  loading: true,
  team: "",
  forward: [],
  guard: [],
  center: [],
  players: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEAM_FETCH:
      return {
        ...state,
        loading: false,
        team: [action.payload[1].team, ...state.team],
        players: [action.payload, ...state.players],
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
    case REMOVE_CENTER:
      return {
        ...state,
        center: state.center.filter(
          (player) => player[1].id !== action.payload.id
        ),
        players: state.players.filter(
          (player) => player[1].id !== action.payload.id
        ),

        team: state.team.filter((team) => team.id !== action.payload.teamId),
      };
    case REMOVE_FORWARD:
      return {
        ...state,
        forward: state.forward.filter(
          (player) => player[1].id !== action.payload.id
        ),
        players: state.players.filter(
          (player) => player[1].id !== action.payload.id
        ),

        team: state.team.filter((team) => team.id !== action.payload.teamId),
      };
    case REMOVE_GUARD:
      return {
        ...state,
        guard: state.guard.filter(
          (player) => player[1].id !== action.payload.id
        ),
        players: state.players.filter(
          (player) => player[1].id !== action.payload.id
        ),

        team: state.team.filter((team) => team.id !== action.payload.teamId),
      };

    default:
      return state;
  }
}
