import { productType } from "@/utils/Type";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = axiosCreate.get("product/all");

export const getOneProduct = (id: number) =>
  axiosCreate.get(`/product/one/${id}`);

export const addProduct = (productData: productType) =>
  axiosCreate.post("product/add", productData);

export const updateProduct = (id: number, productData: productType) =>
  axiosCreate.patch(`product/update/${id}`, productData);

export const deleteProduct = (id: number) =>
  axiosCreate.delete(`product/delete/${id}`);
