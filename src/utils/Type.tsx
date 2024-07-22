import { Dispatch, SetStateAction } from "react";

export type productType = {
  id?: number;
  title: string;
  description: string;
  image: string; // | file
  price: number;
  categoryId: number;
  status: string;
};

export type actionType = {
  type: any;
  payload: any;
};
export type stateType = {
  quantity: number;
  product: productType | null;
};

export type cartType = {
  product: productType | null;
  quantity: number;
};

export type ReducerCartType = {
  cart: cartType[];
  setcart: Dispatch<SetStateAction<cartType[]>>;
};

export type AuthRegisterProps = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  address: string;
  phone: string;
};

export type AuthLoginProps = {
  email: string;
  password: string;
};

export type RoleType = {
  id?: number;
  name: string;
};

export type UserType = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  pseudo: string;
  password?: string;
  address: string;
  phone: string;
  roleId: number;
};

export type CategoryType = {
  id?: number;
  name: string;
};
