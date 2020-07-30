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

//Base url for API Call
const base_url = "https://www.balldontlie.io/api/v1/";

export const FetchPlayer = (Player, season = "2019") => async (dispatch) => {
  try {
    //Make request to get player information
    const reqPlayer = await axios.get(
      `${base_url}players?search=${Player}&per_page=75`
    );

    //Pull ID from first axios GET request
    const { id } = reqPlayer.data.data[0];

    //Pull position from first axios GET request
    const { position } = reqPlayer.data.data[0];

    //Make request to get player's season stats
    const reqStats = await axios.get(
      `${base_url}season_averages?season=${season}&player_ids[]=${id}`
    );

    [TEAM_FETCH, Position(position)].map((type) =>
      dispatch({
        type,
        payload: [reqStats.data.data[0], reqPlayer.data.data[0]],
      })
    );
  } catch (error) {
    //Catch empty request error
    dispatch({
      type: SET_ERROR,
      payload: `${Player} is not a player - please check spelling`,
    });

    //Trigger remover error alert after 4 seconds
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
  }
};

const Position = (position) => {
  return {
    F: FORWARD_FETCH,
    "F-C": CENTER_FETCH,
    "F-G": CENTER_FETCH,
    G: GUARD_FETCH,

    "F-G": GUARD_FETCH,
  }[position];
};

const RemovalType = (position) => {
  return {
    F: "REMOVE_FORWARD",
    "F-C": "REMOVE_CENTER",
    C: "REMOVE_CENTER",
    G: "REMOVE_GUARD",
    "F-G": "REMOVE_GUARD",
  }[position];
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
