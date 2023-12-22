import axios from "axios";
// import { CookieKeys, CookieStorage } from "./cookies";

// ${
//       CookieStorage.get(CookieKeys.AuthToken)
//         ? CookieStorage.get(CookieKeys.AuthToken)
//         : ""
//     }
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3ZDZmMjkxLTYwMzUtNGEzZS05ZjVjLWEyMmIyZjkzZWI3ZiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzMjcyODE4fQ.p6M1Phc9FTurDyotLk6ltm1XHONf3oW77y5z1Wlg2rY`,
  };
  return config;
});
export default http;
