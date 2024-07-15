"use client";
import Productslist from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <Wrapper>
        <Productslist />
      </Wrapper>
    </div>
  );
};

export default page;
