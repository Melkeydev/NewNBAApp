import { ADD_PLAYER, REMOVE_PLAYER } from "../actions/types";

const initialState = {
  loading: true,
  teamPlayers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      if (
        state.teamPlayers.find(
          (player) => player[1].id === action.payload[1].id
        )
      ) {
        return state;
      } else {
        return {
          ...state,
          teamPlayers: [action.payload, ...state.teamPlayers],
        };
      }

    case REMOVE_PLAYER:
      return {
        ...state,
        teamPlayers: state.teamPlayers.filter(
          (player) => player[1].id != action.payload
        ),
      };
    default:
      return state;
  }
}
