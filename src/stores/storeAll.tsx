import { cartType } from "@/utils/Type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface panierType {
  cart: cartType[];
  addItem: (product: cartType) => void;
  removeItem: (id: number) => void;
}

export const useStoreCart = create<panierType>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (product: cartType) =>
        set((state) => {
          const finded = state.cart.find(
            (element: cartType) => element?.product?.id == product?.product?.id
          );
          if (finded) {
            const newCart = state.cart.map((element: cartType) => {
              if (element?.product?.id == product.product?.id) {
                return {
                  ...element,
                  quantity: element.quantity + product.quantity,
                };
              }
              return element;
            });
            return { cart: newCart };
          }
          return { cart: [...state.cart, product] };
        }),

      removeItem: (id: number) =>
        set((state) => ({
          cart: state.cart.filter(
            (element: cartType) => element?.product?.id !== id
          ),
        })),
    }),
    { name: "panier" }
  )
);
