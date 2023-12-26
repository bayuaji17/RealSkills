export const API_ENDPOINT = {
  REGISTER_PAGE: "api/auth/register",
  LOGIN_USER: "api/auth/login",
  LOGIN_ADMIN: "api/auth/login",
  FORGOT_PASSWORD: "api/auth/forgot-password",
  RESET_PASSWORD: "api/auth/reset-password",
  NOTIFICATIONS: "api/users/notifications",
  GET_USER: "api/users",
  GET_ME: "/api/auth/authenticated",
  UPDATE_PROFILE: "api/profiles",
  SEARCH: (query) => {
    return `/api/classes?search=${query}`;
  },
};
