// import { ReducerCartType, productType } from "@/utils/getprooducts";
import { ReducerCartType } from "@/utils/Type";
import { createContext } from "react";

export const ContextCart = createContext<ReducerCartType>({
  cart: [],
  setcart: () => {},
});
