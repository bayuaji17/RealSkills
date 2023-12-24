// class-service.js (atau nama file yang sesuai)
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getFreeClass = async (id) => {
  try {
    const response = await http.get(API_ENDPOINT.FREE_CLASS(id));
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
