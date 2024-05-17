// SearchDateFilter.js
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchDateFilter = ({ filterFunction }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterFunction(event.target.value); // Pass the search query to the filter function
  };

  const handleDateChange = (event) => {
    filterFunction(event.target.value); // Pass the selected date to the filter function
  };

  return (
    <div className="flex justify-between">
      <div className="relative w-8/12 ">
        <input
          type="text"
          className="border border-[#BCBDBE] h-10 w-full px-2 rounded-lg focus:outline-none hover:cursor-pointer"
          placeholder="Search patients by name or serial number"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className="absolute top-1 right-5">
          <IoSearchOutline size={30} className="text-bg-color" />
        </span>
      </div>
      <div className="w-3/12">
        <input
          type="date"
          className="border border-[#BCBDBE] h-10 w-full px-2 rounded-lg focus:outline-none hover:cursor-pointer"
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default SearchDateFilter;
