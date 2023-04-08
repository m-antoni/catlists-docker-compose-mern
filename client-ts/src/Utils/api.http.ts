import axios from "axios";
import { getToken } from "./common";

const SERVER_API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000/api";

const http = axios.create ({
  baseURL: SERVER_API_URL,
  timeout: 60000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (function (config: any) {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default http;