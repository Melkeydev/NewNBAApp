import {
  REMOVE_PLAYER,
  ADD_GUARD_POSITION,
  ADD_CENTER_POSITION,
  ADD_FORWARD_POSITION,
} from "../actions/types";

const initialState = {
  loading: true,
  teamPlayers: [],
  guards: [],
  forwards: [],
  centers: [],
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
          (player) => player[1].id != action.payload
        ),
        loading: false,
      };
    default:
      return state;
  }
}
