import {
  REMOVE_PLAYER,
  ADD_GUARD_POSITION,
  ADD_CENTER_POSITION,
  ADD_FORWARD_POSITION,
  LOAD_PLAYERS,
} from "../actions/types";

const initialState = {
  loading: true,
  teamPlayers: [],
  guards: [],
  forwards: [],
  centers: [],
  loadedPlayers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GUARD_POSITION:
      if (
        state.teamPlayers.find(
          (player) => player[1].id === action.payload[1].id
        )
      ) {
        return state;
      }
      return {
        ...state,
        teamPlayers: [action.payload, ...state.teamPlayers],
        guards: [action.payload, ...state.guards],
        loading: false,
      };

    case ADD_CENTER_POSITION:
      if (
        state.teamPlayers.find(
          (player) => player[1].id === action.payload[1].id
        )
      ) {
        return state;
      }
      return {
        ...state,
        teamPlayers: [action.payload, ...state.teamPlayers],
        centers: [action.payload, ...state.centers],
        loading: false,
      };

    case ADD_FORWARD_POSITION:
      if (
        state.teamPlayers.find(
          (player) => player[1].id === action.payload[1].id
        )
      ) {
        return state;
      }
      return {
        ...state,
        teamPlayers: [action.payload, ...state.teamPlayers],
        forwards: [action.payload, ...state.forwards],
        loading: false,
      };

    case REMOVE_PLAYER:
      return {
        ...state,
        teamPlayers: state.teamPlayers.filter(
          (player) => player[1].id !== action.payload
        ),
        forwards: state.forwards.filter(
          (player) => player[1].id !== action.payload
        ),
        guards: state.guards.filter(
          (player) => player[1].id !== action.payload
        ),
        centers: state.centers.filter(
          (player) => player[1].id !== action.payload
        ),
        loading: false,
      };
    case LOAD_PLAYERS:
      return {
        ...state,
        loadedPlayers: [action.payload, ...state.loadedPlayers],
      };
    default:
      return state;
  }
}
