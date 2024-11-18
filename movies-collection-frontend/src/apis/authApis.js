import { axiosInstance } from "./client";
import { APIS } from "./endpoints";

export const signin = (payload) => {
  return axiosInstance()
    .post(APIS.SIGNIN, payload)
    .then((response) => response)
    .catch((error) => {
      throw error?.response;
    });
};

export const logout = () => {
  return axiosInstance()
    .get(APIS.LOGOUT)
    .then((response) => response)
    .catch((error) => {
      console.error("Logout failed", error?.response);
      throw error;
    });
};

export const signup = (payload) => {
  return axiosInstance()
    .post(APIS.SIGNUP,payload)
    .then((res) => res)
    .catch((err) => {
      console.log("Sign Up Failed", err?.response);
      throw err;
    });
};
