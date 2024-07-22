"use client";
import Banner from "@/components/test/Banner";
import Header3 from "@/components/test/Header3";
import ProductGenreList from "@/components/test/ProductGenreList";
import ProductList from "@/components/test/ProductList";
import TrendingProducts from "@/components/test/TrendingProducts";
import { getAllProducts, getOneProducts } from "@/services/getProducts";
import { CategoryType, productType } from "@/utils/Type";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [idProductGenre, setIdProductGenre] = useState<number | null>(null);
  const [ProductsGenre, setProductsGenre] = useState<CategoryType[]>();
  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts;
      setProducts(response.data.results);
    };
    getProducts();
  }, []);
  useEffect(() => {
    const getProductsId = async () => {
      const response = await getOneProducts(idProductGenre, search);
      setProductsGenre(response.data);
    };
    getProductsId();
  }, [idProductGenre, search]);

  return (
    <div className="flex flex-col gap-3 px-8 ">
      <Header3 setSearch={setSearch} />
      <div className="grid grid-cols-4">
        <div className=" hidden md:block">
          <ProductGenreList setIdProductGenre={setIdProductGenre} />
        </div>
        <div className="col-span-4 md:col-span-3">
          <Banner product={products?.at(0)} />
          <TrendingProducts products={products} />
          <ProductList productsGenre={ProductsGenre} />
        </div>
      </div>
    </div>
  );
};

export default Products;
