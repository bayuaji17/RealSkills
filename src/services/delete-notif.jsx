import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

//*Delete notif by id
export const deleteNotifById = async (id) => {
  const deleteNotif = await http.delete(`${API_ENDPOINT.NOTIFIKASI}${id}`);
  console.log(deleteNotif,"dari delete-class");
  return deleteNotif;
};
