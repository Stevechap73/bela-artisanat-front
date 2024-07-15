import { ContextCart } from "@/app/context/contextCart";
import { cartType } from "@/utils/Type";
import { useContext } from "react";

const Total = () => {
  const { cart } = useContext(ContextCart);
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
      <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
        Subtotal
      </h5>

      <div className="flex items-center justify-between gap-5 ">
        <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
          Promo Code?
        </button>
        <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
          ${" "}
          {cart &&
            cart.reduce(
              (acc: number, element: cartType) =>
                acc + element?.product?.price * element.quantity,
              0
            )}
        </h6>
      </div>
    </div>
  );
};

export default Total;
