import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getUsers = async () => {
  const getAllUser = await http.get(API_ENDPOINT.ALL_USER);
  console.log(getAllUser, "dari getAllusers");
  return getAllUser;
};
