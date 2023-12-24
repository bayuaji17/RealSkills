import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const putUpdate = async (authToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const { data } = await http.put(API_ENDPOINT.UPDATE_PROFILE, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export { putUpdate };

// export const putUpdate = async () => {
//   const update = await http.put(API_ENDPOINT.UPDATE_PROFILE);
//   return update;
// };
