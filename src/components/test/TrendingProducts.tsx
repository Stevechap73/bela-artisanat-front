import { productType } from "@/utils/Type";
import React from "react";
import Product from "../Product";

const TrendingProducts = ({ products }: { products: productType[] }) => {
  return (
    <>
      <h1 className="font-bold  text-[30px]"> Trending Products</h1>
      <div className="grid grid-cols-4 gap-4 xs:grid-cols-1">
        {products?.map(
          (product: productType, index: number) =>
            index > 0 &&
            index < 5 && <Product key={product.id} product={product} />
        )}
      </div>
    </>
  );
};

export default TrendingProducts;

// import { productType } from "@/utils/Type";
// import React from "react";
// import Product from "../Product";

// type TrendingProductsProps = {
//   products: productType[];
// };

// const TrendingProducts: React.FC<TrendingProductsProps> = ({ products }) => {
//   // Vérification que 'products' est bien un tableau et qu'il contient des éléments
//   if (!products || products.length === 0) {
//     return <div>No trending products available.</div>;
//   }

//   return (
//     <>
//       <h1 className="font-bold text-[30px]">Trending Products</h1>
//       <div className="grid grid-cols-4 gap-4 xs:grid-cols-1">
//         {products
//           .filter((_, index) => index > 0 && index < 5) // Filtrer les produits pour obtenir ceux aux indices 1 à 4
//           .map((product) => (
//             // Utiliser l'ID du produit comme clé unique
//             <Product key={product.id} product={product} />
//           ))}
//       </div>
//     </>
//   );
// };

// export default TrendingProducts;
