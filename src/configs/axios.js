import axios from "axios";

let token = localStorage.getItem("token");
token = "Bearer" + " " + String(token);

export const instance = axios.create({
  baseURL: "",
  params: {},
  data: {},
  headers: {
    Authorization: token,
  },
});
instance.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token !== null) {
    token = `Bearer ${token}`;
    config.headers.Authorization = `${token}`;
  }
  return config;
});
