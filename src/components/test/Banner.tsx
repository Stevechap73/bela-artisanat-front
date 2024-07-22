import { productType } from "@/utils/Type";
import React from "react";

const Banner = ({ product }: { product: productType | undefined }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0">
        <h1 className="text-[24px] font-bold">{product?.title}</h1>
        <button className="bg-blue-600 px-8 py-2 rounded-lg">Buy Now</button>
      </div>
      <img
        src={product?.image}
        alt={product?.title}
        className="md:h-[320px] w-full object-center rounded-lg"
      />
    </div>
  );
};

export default Banner;
