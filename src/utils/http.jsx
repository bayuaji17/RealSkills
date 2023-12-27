import axios from "axios";
<<<<<<< HEAD
import { CookieKeys, CookieStorage } from "./cookies";


export const http = axios.create({
=======

const http = axios.create({
>>>>>>> origin/kevin
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
<<<<<<< HEAD
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
=======
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyZjQ3YzNhLWIyYzItNDdmNy05YmU4LTg1ZmRkOGM5YTI0ZiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNjU2NjU2fQ.D74jQ1CvHdGE0ZZniR4gs-s6uwVEZzaRSOhJOGVCCc8`,
>>>>>>> origin/kevin
  };
  return config;
});


export default http;
