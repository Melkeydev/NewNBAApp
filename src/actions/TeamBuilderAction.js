import {
  TEAM_FETCH,
  CENTER_FETCH,
  GUARD_FETCH,
  FORWARD_FETCH,
  REMOVE_STATE,
} from "./types";
import axios from "axios";

const base_url = "https://www.balldontlie.io/api/v1/";

export const FetchPlayer = (Player, season = "2019") => async (dispatch) => {
  const reqPlayer = await axios.get(
    `${base_url}players?search=${Player}&per_page=75`
  );

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

export const removeState = (player) => (dispatch) => {
  const { id, position } = player;

  dispatch({
    type: RemovalType(position),
    payload: id,
  });
};
