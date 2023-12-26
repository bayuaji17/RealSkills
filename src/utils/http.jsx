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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNkMzE5MDZiLTMwNTMtNDk1Zi1iMjlkLTVhNjQ0MGQ0YmZkYiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNjA1Mzg0fQ.bh1qsOFeKANM5jvM0kPU8Hki9bR-gkaLWdZ4URj65FY`,
  };
  return config;
});
export default http;
