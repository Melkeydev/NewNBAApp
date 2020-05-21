import {
  REMOVE_PLAYER,
  ADD_GUARD_POSITION,
  ADD_FORWARD_POSITION,
  ADD_CENTER_POSITION,
} from "./types";

export const addPlayer = (player, id, position) => async (dispatch) => {
  let testPlayer = player.filter((_player) => _player[0].player_id === id);

  dispatch({
    type: addType(position),
    payload: testPlayer[0],
  });
};

const addType = (position) => {
  switch (position) {
    case "F-G":
    case "G":
      return ADD_GUARD_POSITION;
    case "F":
      return ADD_FORWARD_POSITION;
    case "C":
    case "F-C":
      return ADD_CENTER_POSITION;
  }
};

export const removePlayer = (player) => async (dispatch) => {
  const { id } = player[0][1];

  dispatch({
    type: REMOVE_PLAYER,
    payload: id,
  });
};
