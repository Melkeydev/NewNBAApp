import axios from "axios";
import { FETCH_STATS } from "./types";

const base_url = "https://www.balldontlie.io/api/v1/";

export const FetchPlayer = (Player, season = "2019") => async (dispatch) => {
  const reqPlayers = await axios.get(
    `${base_url}players?search=${Player}&per_page=75`
  );

  const { id } = reqPlayers.data.data[0];

  const reqStats = await axios.get(
    `${base_url}season_averages?season=${season}&player_ids[]=${id}`
  );

  const reqFull = { ...reqPlayers.data.data[0], ...reqStats.data.data[0] };

  dispatch({
    type: FETCH_STATS,
    payload: reqFull,
  });
};
