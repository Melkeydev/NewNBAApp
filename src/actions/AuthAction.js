import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import axios from "axios";
import { setError } from "./ErrorActions";

const base_url = "http://localhost:5001/";

//Register User
export const register = ({ first_name, last_name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({ first_name, last_name, email, password });

  try {
    const response = await axios.post(`${base_url}api/users`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error;
    dispatch({
      type: REGISTER_FAIL,
      payload: errors,
    });
  }
};

//Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const response = await axios
      .post(`${base_url}api/users/login`, body, config)
      .catch((err) => console.log(err.response));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (errors) {
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

//Logout User
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
