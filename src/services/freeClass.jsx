// class-service.js (atau nama file yang sesuai)
import { API_ENDPOINT } from "../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import http from "../utils/http";

export const getFreeClass = async (id) => {
  
  try {
    const authToken = CookieStorage.get(CookieKeys.AuthToken);

    console.log('Auth Token:', authToken);
    const response = await http.get(API_ENDPOINT.FREE_CLASS(id), {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response.data, "apa ya");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
