import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const postNotifikasi = async () => {
  const notifikasi = await http.post(API_ENDPOINT.NOTIFIKASI);
  return notifikasi;
};
