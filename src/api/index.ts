import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_URL_API,
});

api.interceptors.request.use(
  (config: any) => {
    config.headers = {
      Accept: "application/json",
    };
    return config;
  },
  (error) => console.error(error)
);

export default api;
