import { API_ENDPOINT } from "../constants/api-endpoint";
import http from "../utils/http";

export const getUserById = async (id) => {
  try {
    const response = await http.get(`${API_ENDPOINT.MY_CLASS}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching user:", error);
    throw error;
  }
};