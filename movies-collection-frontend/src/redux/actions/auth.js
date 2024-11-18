import { SIGNIN, SUCCESS, LOGOUT, REQUEST, FAIL } from "./actionTypes";
import { signin, logout } from "../../apis/authApis";
import { axiosInstance } from "../../apis/client";

export const handleLogin = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SIGNIN[REQUEST],
    });
    signin(payload)
      .then((response) => {
        dispatch({
          type: SIGNIN[SUCCESS],
          data: response?.data
        });
        axiosInstance();
      })
      .catch((err) => {
        dispatch({
          type: SIGNIN[FAIL],
        });
      });
  };
};

export const handleLogout = (autoLogout) => {
  return (dispatch) => {
    if (autoLogout) {
      dispatch({
        type: LOGOUT[SUCCESS],
      });
    } else {
      logout().then((data) => {
        dispatch({
          type: LOGOUT[SUCCESS],
        });
      });
    }
  };
};
