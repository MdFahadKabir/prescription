// Archive.js
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import SearchDateFilter from "../common/Search&DateFilter";
import PrescriptionArray from "../../array/prescriptionArray";
import SearchFilter from "../common/SearchFilter";
import DateFilter from "../common/DateFilter";
const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`; // Convert date format to "YYYY-MM-DD"
};
const PatientsAppointed = () => {
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
      {filteredPatientData.map((appP) => (
        <div key={appP.id}>
          <div className="flex justify-between bg-[#F9FCFC] mb-2 border-l-4 border-bg-hover px-5 py-2">
            <div className="flex flex-col text-[#8B8B8B] text-sm">
              <p className="text-lg font-semibold text-black_2">{appP.name}</p>
              <p>
                <span>26</span> Years . <span>Male</span> . <span>A(-)</span> .{" "}
                <span>5'6"</span> . <span>01765551768</span>
              </p>
              <p>
                <span>
                  Fever, Dry coughing, Muscle pain, Generalized weakness
                </span>
              </p>
            </div>
            <div>
              <p className="text-[#FFB627] text-end mb-5">Serial: {appP.id}</p>
              {/* <HiDotsVertical className="cursor-pointer text-bg-color" /> */}
              <div className="flex ">
                <div>
                  <button className="px-3 py-2 rounded-lg text-bg-hover hover:bg-bg-hover hover:text-white duration-700">
                    Delete
                  </button>
                </div>
                <div className="mx-2"></div>
                <div>
                  <button className="border border-bg-hover text-bg-hover px-3 py-2 rounded-lg hover:bg-bg-hover hover:text-white duration-700">
                    Mark as Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PatientsAppointed;
