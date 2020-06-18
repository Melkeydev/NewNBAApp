import {
  TEAM_FETCH,
  CENTER_FETCH,
  GUARD_FETCH,
  FORWARD_FETCH,
  SET_ERROR,
  REMOVE_ERROR,
  REMOVE_STATES,
} from "./types";
import axios from "axios";

const base_url = "https://www.balldontlie.io/api/v1/";

export const FetchPlayer = (Player, season = "2019") => async (dispatch) => {
  try {
    const reqPlayer = await axios.get(
      `${base_url}players?search=${Player}&per_page=75`
    );

    if (reqPlayer.length === 0) {
      dispatch({
        type: SET_ERROR,
        payload: `${Player} is not a player - please check spelling`,
      });

      setTimeout(() => dispatch({ type: REMOVE_ERROR }), 2000);
    }

    const { id } = reqPlayer.data.data[0];

    const reqStats = await axios.get(
      `${base_url}season_averages?season=${season}&player_ids[]=${id}`
    );

    dispatch({
      type: TEAM_FETCH,
      payload: [reqStats.data.data[0], reqPlayer.data.data[0]],
    });

    const { position } = reqPlayer.data.data[0];

    dispatch({
      type: Position(position),
      payload: [reqStats.data.data[0], reqPlayer.data.data[0]],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: `${Player} is not a player - please check spelling`,
    });

    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
  }
};

const Position = (position) => {
  return position === "F"
    ? FORWARD_FETCH
    : position === "F-C"
    ? CENTER_FETCH
    : position === "C"
    ? CENTER_FETCH
    : position === "G"
    ? GUARD_FETCH
    : position === "F-G"
    ? GUARD_FETCH
    : null;
};

const RemovalType = (position) => {
  return position === "F"
    ? "REMOVE_FORWARD"
    : position === "F-C"
    ? "REMOVE_CENTER"
    : position === "C"
    ? "REMOVE_CENTER"
    : position === "G"
    ? "REMOVE_GUARD"
    : position === "F-G"
    ? "REMOVE_GUARD"
    : null;
};

export const removeState = (player, teamId) => (dispatch) => {
  const { id, position } = player;

  dispatch({
    type: RemovalType(position),
    payload: { id, teamId },
  });
};

export const removeStates = () => (dispatch) => {
  dispatch({
    type: REMOVE_STATES,
  });
};
