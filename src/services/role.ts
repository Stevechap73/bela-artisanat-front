import { RoleType } from "@/utils/Type";
import axios from "axios";

const token = window.localStorage.getItem("token");
console.log(token);

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const getAllRoles = axiosCreate.get("role/all");

export const addRole = (roleData: RoleType) =>
  axiosCreate.post("role/add", roleData);

export const updateRole = (id: number, roleData: RoleType) =>
  axiosCreate.patch(`role/update/${id}`, roleData);

export const deleteRole = (id: number) =>
  axiosCreate.delete(`role/delete/${id}`);
