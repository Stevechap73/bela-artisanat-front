import { RoleType } from "@/utils/Type";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllRoles = axiosCreate.get("role/all");

export const addRole = (roleData: RoleType) =>
  axiosCreate.post("role/add", roleData);

export const updateRole = (id: number, roleData: RoleType) =>
  axiosCreate.patch(`role/update/${id}`, roleData);

export const deleteRole = (id: number) =>
  axiosCreate.delete(`role/delete/${id}`);

// // Create Role
// export async function addRole(roleCreate: RoleType) {
//   let url = `${process.env.NEXT_PUBLIC_API_URL}role/add`;

//   let axiosConfig = {
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .post(
//       url,
//       {
//         name: roleCreate.name,
//       },
//       axiosConfig
//     )
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       throw new Error(e);
//     });
// }

// // Update Role par son id
// export async function updateRole(roleUpdate: RoleType) {
//   let url = `${process.env.NEXT_PUBLIC_API_URL}role/update/${roleUpdate.id}`;

//   let axiosConfig = {
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   return axios
//     .patch(
//       url,
//       {
//         name: roleUpdate.name,
//       },

//       axiosConfig
//     )
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       throw new Error(e);
//     });
// }
