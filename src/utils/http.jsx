import axios from "axios";

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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyZjQ3YzNhLWIyYzItNDdmNy05YmU4LTg1ZmRkOGM5YTI0ZiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzAzNjU2NjU2fQ.D74jQ1CvHdGE0ZZniR4gs-s6uwVEZzaRSOhJOGVCCc8`,
  };
  return config;
});
export default http;
