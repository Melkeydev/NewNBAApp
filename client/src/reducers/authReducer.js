import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  HAS_CHECKED_USER,
  TOKEN_VALIDATION_ERROR,
  TOKEN_VALIDATION_SUCCESS,
} from "../actions/types";

const initialState = {
  user: null,
  error: null,
  isLoggedIn: false,
  token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case TOKEN_VALIDATION_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
    case TOKEN_VALIDATION_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
