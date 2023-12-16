export const API_ENDPOINT = {
  REGISTER_PAGE: "api/auth/register",
  LOGIN_USER : "api/auth/login",
  KATEGORI : "api/general/categories",
  ALL_CLASS : "api/classes",
  SEARCH : (query) => `api/classes?search=${query}`,
};
