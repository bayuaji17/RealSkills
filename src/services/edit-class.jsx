import { API_ENDPOINT } from "../utils/api-endpoint";
import httpForm from "../utils/httpForm";

//*EditClass By ID
export const editClassById = async (id,newData) => {
  const putClassId = await httpForm.put(`${API_ENDPOINT.EDIT_CLASS}${id}`,newData);
  console.log(putClassId,"dari edit-class");
  return putClassId;
};