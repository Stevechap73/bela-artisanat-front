import { productType } from "@/utils/Type";
import axios from "axios";
import { headers } from "next/headers";

const token = window.localStorage.getItem("token");
// console.log(token);

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const getAllProducts = axiosCreate.get("product/all");

export const getOneProduct = (id: number) =>
  axiosCreate.get(`/product/one/${id}`);

export const getCategoryProduct = (categoryId: number) =>
  axiosCreate.get(`/product/category/${categoryId}`);

export const getOneProducts = (id: number | null, search: string) =>
  axiosCreate.get(`/product/one/${id}` + search);

export const addProduct = (productData: productType) =>
  axiosCreate.post("product/add", productData);

export const updateProduct = (id: number, productData: productType) =>
  axiosCreate.patch(`product/update/${id}`, productData);

export const deleteProduct = (id: number) =>
  axiosCreate.delete(`product/delete/${id}`);
