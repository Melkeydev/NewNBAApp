import { ADD_PLAYER, REMOVE_PLAYER } from "./types";

export const addPlayer = (player) => async (dispatch) => {
  console.log(player)

  const {id} = player[0][1]

  dispatch({
    type: ADD_PLAYER,
    payload: player[0],
  });
};

export const removePlayer = (player) => async (dispatch) => {
  console.log(player)
  const { id } = player[0][1];

  dispatch({
    type: REMOVE_PLAYER,
    payload: id,
  });
};
