import { productType } from "@/utils/Type";
import { Angry, Flame, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PiAlienLight } from "react-icons/pi";

const ProductDetails = ({ product }: { product: productType }) => {
  return (
    <Link href={`/listproducts/${product.id}`}>
      <div className="sm:w-full">
        <img
          src={product?.image}
          alt={product?.title}
          className="h-[270px] object-cover rounded-lg   sm:w-full"
        />
        <h2>
          {product?.title}
          <span className="bg-green-100 text-black">{product?.price}</span>
        </h2>
        <div className="flex gap-3 ">
          <Star fill="yellow" color="yellow" />
          {product?.price}
          <MessageCircle fill="black" />
          {product?.status}
          {/* <Flame fill="orange" /> */}
          <PiAlienLight />
          suggestions
        </div>
      </div>
    </Link>
  );
};

export default ProductDetails;
