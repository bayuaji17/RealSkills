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
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhNzAyMmVlLWQyMjctNDE2ZC1hZjQ2LTA4Njg4NGU3OTIxYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwMzQzMDgxMX0.S2LuYprccqmZNkkHUiUQ7Q-Fht9ktlRILEQm3SEb03g",
  };
  return config;
});

export default http;
