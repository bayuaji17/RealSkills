import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getAllClass = async () => {
  const allClasses = await http.get(API_ENDPOINT.CLASSES);
  return allClasses;
};
