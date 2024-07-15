import { productType } from "@/utils/Type";
import Link from "next/link";

import React from "react";

const Product = ({ product }: { product: productType }) => {
  return (
    <Link href={`/ecommerce/${product.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.image}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
              </a>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
