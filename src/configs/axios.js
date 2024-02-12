import axios from "axios";

let token = localStorage.getItem("token");
token = String(token);

export const instance = axios.create({
  baseURL: "http://52.90.114.34:3000",
  params: {},
  data: {},
  headers: {
    // Authorization: token,
  },
});
instance.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token !== null) {
    config.headers.Authorization = token;
  }
  return config;
});
