import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7212",
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
