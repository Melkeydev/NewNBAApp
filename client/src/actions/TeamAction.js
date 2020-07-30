import {
  REMOVE_PLAYER,
  ADD_GUARD_POSITION,
  ADD_FORWARD_POSITION,
  ADD_CENTER_POSITION,
} from "./types";
import { addPlayers } from "./PlayersAction";

export const addPlayer = (player, id, position) => async (dispatch) => {
  //Filter our single player from array of players
  let Player = player.filter((_player) => _player[0].player_id === id);

  dispatch(addPlayers(Player[0][1]));

  var randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });

  Player[0].push(randomColor);

  dispatch({
    type: addType(position),
    payload: Player[0],
  });
};

const addType = (position) => {
  return (
    {
      "F-G": ADD_GUARD_POSITION,
      G: ADD_GUARD_POSITION,
      F: ADD_FORWARD_POSITION,
      C: ADD_CENTER_POSITION,
      "F-C": ADD_CENTER_POSITION,
    }[position] || null
  );
};

export const removePlayer = (player) => {
  const { player_id } = player;

  return {
    type: REMOVE_PLAYER,
    payload: player_id,
  };
};
