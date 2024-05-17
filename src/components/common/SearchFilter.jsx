// SearchFilter.js
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchFilter = ({ filterFunction }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterFunction(event.target.value); // Pass the search query to the filter function
  };

  return (
    <div className="relative w-8/12 ">
      <input
        type="text"
        className="border border-[#BCBDBE] h-10 w-full px-2 rounded-lg focus:outline-none hover:cursor-pointer bg-white"
        placeholder="Search patients by name or serial number"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <span className="absolute top-1 right-5">
        <IoSearchOutline size={30} className="text-bg-color" />
      </span>
    </div>
  );
};

export default SearchFilter;
