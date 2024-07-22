import { getAllCategories } from "@/services/category";
import { CategoryType, productType, RoleType } from "@/utils/Type";
import React, { useEffect, useState } from "react";
import ProductGenreCard from "./ProductGenreCard";

const ProductGenreList = ({
  setIdProductGenre,
}: {
  setIdProductGenre: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [productGenreList, setProductGenreList] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getProductGenres = async () => {
      const response = await getAllCategories;
      setProductGenreList(response.data);
    };
    getProductGenres();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h2>Categories</h2>
      <div className="flex flex-col justify-center">
        {productGenreList.map((category: CategoryType) => (
          <ProductGenreCard
            key={category.id}
            category={category}
            setIdProductGenre={setIdProductGenre}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGenreList;

// import { getAllCategories } from "@/services/category";
// import { CategoryType } from "@/utils/Type";
// import React, { useEffect, useState } from "react";
// import ProductGenreCard from "./ProductGenreCard";

// const ProductGenreList = ({
//   setIdProductGenre,
// }: {
//   setIdProductGenre: React.Dispatch<React.SetStateAction<number | null>>;
// }) => {
//   const [productGenreList, setProductGenreList] = useState<CategoryType[]>([]);

//   useEffect(() => {
//     const getProductGenres = async () => {
//       try {
//         const response = await getAllCategories;
//         if (response.data && response.data.results) {
//           setProductGenreList(response.data.results);
//         } else {
//           console.error("Invalid response structure", response);
//         }
//       } catch (error) {
//         console.error("There was an error fetching the product genres!", error);
//       }
//     };

//     getProductGenres();
//   }, []);

//   if (!productGenreList || productGenreList.length === 0) {
//     return <div>Loading...</div>; // ou un autre message de chargement ou état vide
//   }

//   return (
//     <div className="flex flex-col gap-3">
//       <h2>Categories</h2>
//       <div className="flex flex-col justify-center">
//         {productGenreList.map((category: CategoryType) => (
//           <ProductGenreCard
//             key={category.id}
//             category={category}
//             setIdProductGenre={setIdProductGenre}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGenreList;
