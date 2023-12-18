import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getUsers = async () => {
  const getUserByID = await http.get(API_ENDPOINT.GET_USER);
  return getUserByID;
};
