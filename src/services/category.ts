import { CategoryType } from "@/utils/Type";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCategories = axiosCreate.get("category/all");

export const addCategory = (categoryData: CategoryType) =>
  axiosCreate.post("category/add", categoryData);

export const updateCategory = (id: number, categoryData: CategoryType) =>
  axiosCreate.patch(`category/update/${id}`, categoryData);

export const deleteCategory = (id: number) =>
  axiosCreate.delete(`category/delete/${id}`);
