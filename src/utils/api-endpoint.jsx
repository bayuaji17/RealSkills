export const API_ENDPOINT = {
  REGISTER_PAGE: "api/auth/register",
  LOGIN_USER : "api/auth/login",
  KATEGORI : "/api/general/categories",
  ALL_CLASS : "/api/classes",
  SEARCH : (query) => { return `/api/classes?search=${query}`},
  GET_ME : "/api/auth/authenticated",
  FREE_CLASS : (id) => { return `/api/users/class/access/free/${id}`},
};
