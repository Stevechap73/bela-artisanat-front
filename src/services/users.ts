import { UserType } from "@/utils/Type";
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

export const getAllUsers = axiosCreate.get("user/all");

export const deleteUser = (id: number) =>
  axiosCreate.delete(`user/delete/${id}`);

export const updateUser = (id: number, userData: UserType) =>
  axiosCreate.patch(`user/update/${id}`, userData);
