import {
  TEAM_FETCH,
  CENTER_FETCH,
  GUARD_FETCH,
  FORWARD_FETCH,
  REMOVE_CENTER,
  REMOVE_FORWARD,
  REMOVE_GUARD,
  REMOVE_STATES,
} from "../actions/types";

const initialState = {
  loading: true,
  team: "",
  forward: [],
  guard: [],
  center: [],
  players: [],
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEAM_FETCH:
      if (
        state.players.find((player) => player[1].id === action.payload[1].id)
      ) {
        return state;
      }

      return {
        ...state,
        team: [action.payload[1].team, ...state.team],
        players: [action.payload, ...state.players],
        loading: false,
      };

    case CENTER_FETCH:
      if (
        state.center.find((player) => player[1].id === action.payload[1].id)
      ) {
        return state;
      }
      return {
        ...state,
        center: [action.payload, ...state.center],
        loading: false,
      };

    case GUARD_FETCH:
      if (state.guard.find((player) => player[1].id === action.payload[1].id)) {
        return state;
      }
      return {
        ...state,
        guard: [action.payload, ...state.guard],
        loading: false,
      };

    case FORWARD_FETCH:
      if (
        state.forward.find((player) => player[1].id === action.payload[1].id)
      ) {
        return state;
      }
      return {
        ...state,
        forward: [action.payload, ...state.forward],
        loading: false,
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
        loading: false,
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

        loading: false,
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

        loading: false,
      };

    case REMOVE_STATES:
      return {
        loading: true,
        team: "",
        forward: [],
        guard: [],
        center: [],
        players: [],
      };

    default:
      return state;
  }
}
