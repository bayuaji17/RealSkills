import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import http from "../../utils/http";

export const postLoginAdmin = async (input) => {
  const loginUser = await http
    .post(API_ENDPOINT.LOGIN_ADMIN, input)
    .then((result) => {
      console.log(result, "result");

      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      window.location.href = "/";
      return result;
    })
    .catch((err) => {});
  return loginUser;
};
