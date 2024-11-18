import { axiosInstance } from "./client";

export const addEditMovieApi = (endpoint, payload) => {
  return axiosInstance()
    .post(endpoint, payload)
    .then((res) => res.data);
};

export const listMovieApi = (endpoint) => {
  return axiosInstance()
    .get(endpoint)
    .then((res) => res.data);
};

export const findMovieById = (endpoint) => {
  return axiosInstance()
    .get(endpoint)
    .then((res) => res.data);
};

export const updateMovieById = (endpoint, payload) => {
  return axiosInstance()
    .put(endpoint, payload)
    .then((res) => res.data);
};

export const deleteMovieById = (endpoint) => {
    return axiosInstance()
      .delete(endpoint)
      .then((res) => res.data);
  };
  

