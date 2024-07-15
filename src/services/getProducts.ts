import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = axiosCreate.get("product/all");
export const getOneProduct = (id: number) => axiosCreate.get(`/products/${id}`);
