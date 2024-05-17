import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import SearchFilter from "../common/SearchFilter";
import DateFilter from "../common/DateFilter";
import PrescriptionArray from "../../array/prescriptionArray";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`; // Convert date format to "YYYY-MM-DD"
};

const Archive = () => {
  const [filteredPatientData, setFilteredPatientData] =
    useState(PrescriptionArray);

  const handleFilter = (searchQuery) => {
    const filteredData = PrescriptionArray.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formatDate(patient.create) === searchQuery // Use formatDate to convert date
    );
    setFilteredPatientData(filteredData);
  };

  return (
    <>
      <div className="flex justify-between">
        <SearchFilter filterFunction={handleFilter} />
        <DateFilter filterFunction={handleFilter} />
      </div>
      <div className="my-5"></div>
      {filteredPatientData.map((archivePatient) => (
        <div key={archivePatient.id}>
          <div className="flex justify-between bg-[#F9FCFC] mb-2 border-l-4 border-bg-hover px-5 py-2">
            <div className="flex flex-col text-[#8B8B8B] text-sm">
              <p className="text-lg font-semibold text-black_2">
                {archivePatient.name}
              </p>
              <p>
                <span>26</span> Years . <span>Male</span> . <span>A(-)</span> .{" "}
                <span>5'6"</span> . <span>01765551768</span>
              </p>
              <p>
                <span>{formatDate(archivePatient.create)}</span> .{" "}
                <span>Rx983422</span>
              </p>
              <p>Chamber: {archivePatient.chamber || "N/A"}</p>{" "}
              {/* Display "N/A" if chamber is not available */}
            </div>
            <div className="flex flex-row">
              <MdOutlineRemoveRedEye className="cursor-pointer text-bg-color" />
              <FiPrinter className="cursor-pointer mx-3 text-bg-color" />
              <HiDotsVertical className="cursor-pointer text-bg-color" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Archive;
