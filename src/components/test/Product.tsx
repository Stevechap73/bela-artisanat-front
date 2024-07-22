import { productType } from "@/utils/Type";
import React from "react";

const Product = ({ product }: { product: productType }) => {
  return (
    <div>
      <img
        src={product.image}
        alt="test"
        className="h-[270px] object-cover rounded-lg"
      />
      <h2>{product.title}</h2>
    </div>
  );
};

export default Product;
