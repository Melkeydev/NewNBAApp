import {
  REMOVE_PLAYER,
  ADD_GUARD_POSITION,
  ADD_FORWARD_POSITION,
  ADD_CENTER_POSITION,
} from "./types";

import { addPlayers } from "./PlayersAction";

export const addPlayer = (player, id, position) => async (dispatch) => {
  let testPlayer = player.filter((_player) => _player[0].player_id === id);

  dispatch(addPlayers(testPlayer[0][1]));

  var randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });

  testPlayer[0].push(randomColor);

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
    default:
      return null;
  }
};

export const removePlayer = (player) => async (dispatch) => {
  const { player_id } = player;

  dispatch({
    type: REMOVE_PLAYER,
    payload: player_id,
  });
};
