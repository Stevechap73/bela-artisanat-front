import { CategoryType } from "@/utils/Type";
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

export const getAllCategories = axiosCreate.get("category/all");

export const addCategory = (categoryData: CategoryType) =>
  axiosCreate.post("category/add", categoryData);

export const updateCategory = (id: number, categoryData: CategoryType) =>
  axiosCreate.patch(`category/update/${id}`, categoryData);

export const deleteCategory = (id: number) =>
  axiosCreate.delete(`category/delete/${id}`);
