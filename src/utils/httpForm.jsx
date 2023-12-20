import axios from "axios";

const httpForm = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 30000,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

httpForm.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxZDkzNDRiLWNjZjAtNDE0YS1hZDNjLTBhZDAzNWQyZjRiNSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwMjgyODc5NX0.yO25awFpONd_bReSw6zbHNLvLSXPfwEqqswCjbYgOhA",
  };
  return config;
});
export default httpForm;
