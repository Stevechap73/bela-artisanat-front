"use client";
import { useEffect, useState } from "react";
import Product from "./Product";
import { productType } from "@/utils/Type";
import { getAllProducts } from "@/services/getProducts";

const Productslist = () => {
  const [products, setproducts] = useState<productType[]>();
  console.log({ products });
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllProducts;
      setproducts(response.data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products &&
          products.map((product: productType) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Productslist;
