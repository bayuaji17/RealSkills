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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyMTFlZDdkLTBiNDYtNGRiZS05ZDdiLWRhYTA4OThkOTMyNyIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNDM3OTU5fQ.CzLF2iiyKJmIqmpJ4txdOZ-8hjVN-F2uGJw4bfTByxc`,
  };
  return config;
});
export default http;
