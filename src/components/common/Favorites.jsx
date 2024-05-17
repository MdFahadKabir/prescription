import React from "react";
import { CiStar } from "react-icons/ci";

const Favorites = ({ favoriteItems, onFavoriteItemClick }) => {
  return (
    <>
      <div className="flex flex-row w-full border-b border-[#D9D9D9] pb-2 mb-6 ">
        <CiStar size={30} className="my-auto" />
        <p className="font-semibold text-2xl">Favorites</p>
      </div>
      <div>
        <div className="flex flex-wrap mb-6 w-[1000px] h-24  overflow-y-auto custom-scrollbar overflow-hidden">
          {favoriteItems.length === 0 ? (
            <div className="text-red bg-[#CFFEFF] my-auto font-semibold cursor-pointer m-1 p-2">
              No favorite data added
            </div>
          ) : (
            favoriteItems.map((item, index) => (
              <div
                key={index}
                className="text-bg-color bg-[#CFFEFF] my-auto font-semibold cursor-pointer m-1 p-2"
                onClick={() => onFavoriteItemClick(item.name)}
              >
                {item.name}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
