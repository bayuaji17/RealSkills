import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const fetchSearch = async (query) => {
  return await http.get(API_ENDPOINT.SEARCH(query));
  // console.log(dataSearch.data, "ininiiiiiiiiidata")
  // return dataSearch.data;
 
};