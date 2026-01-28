import axios from "axios";
import { getCookie } from "cookies-next";

const baseURL = "/api";

// General purpose axios instance for public routes
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios instance for protected routes, with an interceptor to add the token
export const protectedApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

protectedApi.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
