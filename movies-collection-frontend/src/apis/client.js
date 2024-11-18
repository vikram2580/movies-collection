import axios from "axios";
import { toast } from "react-toastify";
import { handleLogout } from "../redux/actions/auth";
import { dispatchAction, store } from "../redux/store";
import { BASE_URL } from "./endpoints";

const defaultOptions = () => ({
  
  headers: {
    Authorization: `Bearer ${store?.getState()?.auth?.accessToken}`,
  },
  
  transformResponse: axios.defaults.transformResponse.concat((response) => {
    if (response?.statusCode === 401) {
      dispatchAction(handleLogout(true));
    }
    return response;
  }),
});

export const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    ...defaultOptions(),
  });

  instance.interceptors.response.use(
    (response) =>{{toast.success(
      <span >{response?.data?.msg}</span>
    ) }return response},
    (error) => {
      toast.error(
        error?.response?.data?.msg
      );
      throw error;
    }
  );
  return instance;
};
