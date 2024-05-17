// Archive.js
import React, { useState } from "react";

import { HiDotsVertical } from "react-icons/hi";

import PrescriptionArray from "../../array/prescriptionArray";
import DateFilter from "../common/DateFilter";
import SearchFilter from "../common/SearchFilter";
const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
};
const PatientsAll = () => {
  const [filteredPatientData, setFilteredPatientData] =
    useState(PrescriptionArray);

  const handleFilter = (searchQuery) => {
    // Filter by both name/serial number and date
    const filteredData = PrescriptionArray.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.date === searchQuery
    );
    setFilteredPatientData(filteredData);
  };

  return (
    <>
      <div className="flex justify-between">
        <SearchFilter filterFunction={handleFilter} />
        <DateFilter filterFunction={handleFilter} />
      </div>
      {filteredPatientData.map((allP) => (
        <div key={allP.id}>
          <div className="flex justify-between bg-[#F9FCFC] mb-2 border-l-4 border-bg-hover px-5 py-2">
            <div className="flex flex-col text-[#8B8B8B] text-sm">
              <p className="text-lg font-semibold text-black_2">{allP.name}</p>
              <p>
                <span>26</span> Years . <span>Male</span> . <span>A(-)</span> .{" "}
                <span>5'6"</span> . <span>01765551768</span>
              </p>
            </div>
            <div>
              <HiDotsVertical className="cursor-pointer text-bg-color" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PatientsAll;
