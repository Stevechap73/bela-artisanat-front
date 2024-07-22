import { productType } from "@/utils/Type";
import React from "react";
import ProductDetails from "./ProductDetails";

const ProductList = ({
  productsGenre,
}: {
  productsGenre: productType[] | undefined;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[30px] font-bold">Products List</h1>
      <div className="grid md:grid-cols-4 gap-5 xs:grid-cols-1 sm:grid-cols-1">
        {productsGenre?.map((product: productType) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
