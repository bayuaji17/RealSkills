import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${
//       CookieStorage.get(CookieKeys.AuthToken)
//         ? CookieStorage.get(CookieKeys.AuthToken)
//         : ""
//     }`,
//   };
//   return config;
// });
http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxZDkzNDRiLWNjZjAtNDE0YS1hZDNjLTBhZDAzNWQyZjRiNSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwMjgyODc5NX0.yO25awFpONd_bReSw6zbHNLvLSXPfwEqqswCjbYgOhA",
  };
  return config;
});
export default http;
