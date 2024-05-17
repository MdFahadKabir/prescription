// DateFilter.js
import React from "react";

const DateFilter = ({ filterFunction }) => {
  const handleDateChange = (event) => {
    filterFunction(event.target.value); // Pass the selected date to the filter function
  };

  return (
    <div className="w-3/12">
      <input
        type="date"
        className="border border-[#BCBDBE] h-10 w-full px-2 rounded-lg focus:outline-none hover:cursor-pointer bg-white"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateFilter;
