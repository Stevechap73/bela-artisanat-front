import { UserType } from "@/utils/Type";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllUsers = axiosCreate.get("user/all");

export const deleteUser = (id: number) =>
  axiosCreate.delete(`user/delete/${id}`);

export const updateUser = (id: number, userData: UserType) =>
  axiosCreate.patch(`user/update/${id}`, userData);
