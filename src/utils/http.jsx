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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkY2NlMTRhLTFlOWUtNDAzOC1hNTk0LTI5OTliODE3NWQ2NSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNjA5NzE1fQ.XQEn1cSWAHArnJcsx-HzPGrn5EPSxutshQj1IPkLfBw`,
  };
  return config;
});
export default http;
