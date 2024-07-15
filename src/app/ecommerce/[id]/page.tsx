// import ProductDetail from "@/components/ProductDetail";
import ProductDetail from "@/components/ProductDetail";
import React from "react";

const page = ({ params }: { params: any }) => {
  return (
    <div className="relative">
      <ProductDetail id={params.id} />
    </div>
  );
};

export default page;
