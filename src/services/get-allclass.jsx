import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const allClass = async (authToken, page) => {
  try {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        params: {
          page,
        },
      };
      const { data } = await http.get(API_ENDPOINT.ALL_CLASS, config);
      return data;
  } catch (error) {
      throw error; 
  }
};

export { allClass };
