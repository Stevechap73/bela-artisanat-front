// import { genreType } from "@/Utils/TypeGames";
import { RoleType } from "@/utils/Type";
import React from "react";

const ProductGenreCard = ({
  category,
  setIdProductGenre,
}: {
  category: RoleType;
  setIdProductGenre: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div
      className="flex gap-2 items-center p-1  cursor-pointer overflow-hidden rounded-md hover:bg-gray-400"
      onClick={() => {
        setIdProductGenre(Number(category.id));
      }}
    >
      {/* <img
        src={genre.image_background}
        className=" group-hover: scale-105 transition-all w-[40px] h-[40px] object-cover rounded-lg"
        alt="test"
      /> */}
      <h3>{category.name}</h3>
    </div>
  );
};

export default ProductGenreCard;
