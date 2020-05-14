import axios from "axios";
import { FETCH_STATS, FETCH_SEASONS, FETCH_LAST_TEN } from "./types";

const base_url = "https://www.balldontlie.io/api/v1/";

export const FetchPlayer = (Player, season = "2019") => async (dispatch) => {
  const reqPlayers = await axios.get(
    `${base_url}players?search=${Player}&per_page=75`
  );

  const { id } = reqPlayers.data.data[0];

  const reqStats = await axios.get(
    `${base_url}season_averages?season=${season}&player_ids[]=${id}`
  );

  dispatch({
    type: FETCH_STATS,
    payload: [reqStats.data.data[0], reqPlayers.data.data[0]],
  });
};

export const FetchPlayerSeason = (id, season) => async (dispatch) => {
  const reqSeasons = await axios.get(
    `${base_url}season_averages?season=${season}&player_ids[]=${id}`
  );

  dispatch({
    type: FETCH_SEASONS,
    payload: reqSeasons.data.data[0],
  });
};

export const FetchLastTenGames = (id, season = "2019") => async (dispatch) => {
  const response = await axios.get(
    `${base_url}stats?seasons[]=${season}&player_ids[]=${id}&per_page=50&page=0&`
  );

  const reqSortedGames = response.data.data
    .sort((a, b) => b.id - a.id)
    .slice(0, 10);

  dispatch({
    type: FETCH_LAST_TEN,
    payload: reqSortedGames,
  });
};
