import axios from "axios";
import { loadUser } from "./AuthAction";

const base_url = "http://localhost:5001/";

export const addPlayers = (player) => async (dispatch) => {
  const {
    first_name,
    height_feet,
    height_inches,
    id,
    last_name,
    position,
    team: { abbreviation, city, conference, division, full_name, name },
    weight_pounds,
  } = player[0][1];

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({
    first_name,
    height_feet,
    height_inches,
    id,
    last_name,
    position,
    team: { abbreviation, city, conference, division, full_name, name },
    weight_pounds,
  });

  try {
    const response = await axios.post(`${base_url}api/players`, body, config);
    dispatch(loadUser());
  } catch (err) {}
};

export const addPlayerToDB = (player) => async (dispatch) => {
  const {
    FG_Miss,
    FT_Miss,
    ast,
    blk,
    dreb,
    fg3_pct,
    fg3a,
    fg3m,
    fg_pct,
    fga,
    fgm,
    ft_pct,
    fta,
    ftm,
    games_played,
    min,
    oreb,
    pf,
    player_id,
    pts,
    reb,
    season,
    stl,
    turnover,
  } = player[0][0];

  const randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  console.log(randomColor);
  const body = JSON.stringify({
    FG_Miss,
    FT_Miss,
    ast,
    blk,
    dreb,
    fg3_pct,
    fg3a,
    fg3m,
    fg_pct,
    fga,
    fgm,
    ft_pct,
    fta,
    ftm,
    games_played,
    min,
    oreb,
    pf,
    player_id,
    pts,
    reb,
    season,
    stl,
    turnover,
    color: randomColor,
  });

  try {
    const response = await axios.post(
      `${base_url}api/playerStats`,
      body,
      config
    );
  } catch (err) {
    console.log(err);
  }
};
