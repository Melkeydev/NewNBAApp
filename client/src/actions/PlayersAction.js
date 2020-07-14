import axios from "axios";

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
  } catch (err) {}
};
