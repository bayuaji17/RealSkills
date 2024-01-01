import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getAllClass = async () => {
  const allClasses = await http.get(API_ENDPOINT.CLASSES);
  return allClasses;
};


// export const getFilterClasses = async ({page, limit, category, type, level}) => {
//   const params = {
//     category,
//     type,
//     level,
//     page,
//     limit,
//   }
//   const filterClasses = await http.get(API_ENDPOINT.CLASSES, { params });
//   return filterClasses;
// }

export const getFilterClasses = async (
  page,
  limit,
  search,
  category,
  type,
  level
) => {
  const filterClasses = await http.get(
    `${API_ENDPOINT.CLASSES}?page=${page}&limit=${limit}&search=${search}&category=${category}&type=${type}&level=${level}`
  );
  console.log(getAllClass, "dari getClass");
  return filterClasses;
};