import axios from "axios";
// import { CookieKeys, CookieStorage } from "./cookies";

// ${
//       CookieStorage.get(CookieKeys.AuthToken)
//         ? CookieStorage.get(CookieKeys.AuthToken)
//         : ""
//     }
const http = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMGE5ZGE5LTk4YjEtNDhlMy1iYTNhLTQyZDVkZTFjZjA2NiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzMzUyOTI0fQ.wevbm9lk8OIPrKg19SYQqNDcQ8mvDs4-O_-8Q6xZmYE`,
  };
  return config;
});

export default http;
