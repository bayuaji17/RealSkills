// class-service.js (atau nama file yang sesuai)
import { API_ENDPOINT } from "../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import http from "../utils/http";

let isFetching = false; 

export const getFreeClass = async (id) => {
  try {
    if (isFetching) {
      return; 
    }

    isFetching = true; 

    const authToken = CookieStorage.get(CookieKeys.AuthToken);

    console.log('Auth Token:', authToken);

    const response = await http.get(API_ENDPOINT.FREE_CLASS(id), {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);

    isFetching = false; 
    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    isFetching = false; 
    throw error;
  }
};
