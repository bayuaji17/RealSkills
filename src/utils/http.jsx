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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0OTBmYWNjLWVjYTItNDg3ZC1iYmQyLWVhYzc1OTA5NjRhMCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNjE4MTgxfQ.XMkj13ANEiTpIsn0wpykY3rpjA5Uiz8dP0p-F5SVWPc`,
  };
  return config;
});
export default http;
