import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getMe = async (authToken) => {
  try {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      };
      const { data } = await http.get(API_ENDPOINT.GET_ME, config);
      return data;
  } catch (error) {
      throw error; 
  }
};

