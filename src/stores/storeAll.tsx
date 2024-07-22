import { cartType } from "@/utils/Type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Définitions des interfaces pour le store
export interface countType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface panierType {
  cart: cartType[];
  addItem: (product: cartType) => void;
  removeItem: (id: number) => void;
  getTotal: () => number; // Assurez-vous que getTotal retourne un nombre
}

// Store pour la gestion du compteur

// Store pour la gestion du panier
export const useStoreCart = create<panierType>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotal: () => {
        return get().cart.reduce((acc: number, element: cartType) => {
          const price = element?.product?.price || 0;
          const quantity = element?.quantity || 0;
          return acc + price * quantity;
        }, 0);
      },

      addItem: (product: cartType) =>
        set((state) => {
          const finded = state.cart.find(
            (element: cartType) => element?.product?.id === product?.product?.id
          );
          if (finded) {
            const newCart = state.cart.map((element: cartType) => {
              if (element?.product?.id === product.product?.id) {
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
