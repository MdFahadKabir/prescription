import React, { useState, useEffect } from "react";
import { PiNotebookFill } from "react-icons/pi";
import { RiPrinterCloudFill } from "react-icons/ri";
import { IoMdPrint } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import PrescriptionArray from "../../array/prescriptionArray";
import Modal from "../common/Modal";
import RegisterPatients from "./registerPatients";
import GenPrescription from "./genPrescription";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
};

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Prescription = () => {
  const [patientType, setPatientType] = useState("manual"); // Default to manual
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(getTodayDate()); // Initialize with today's date
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSelectedPatient(null); // Reset selected patient when date changes
  }, [selectedDate]);

  const handlePatientTypeChange = (type) => {
    setPatientType(type);
    setSearchQuery(""); // Clear search query when toggling patient type
    setShowResults(false);
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setShowResults(false);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setShowResults(query !== "");
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    setShowResults(false);
  };

  const filteredPatients =
    patientType === "manual"
      ? PrescriptionArray.filter(
          (patient) =>
            patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            patient.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
            patient.id.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : selectedDate
      ? PrescriptionArray.filter(
          (patient) => patient.create === formatDate(selectedDate)
        )
      : []; // If no date selected, show "No more appointments today"
  const handleCloseModal = () => {
    setShowModal(false);
    // console.log("Modal closed");
  };
  return (
    <>
      <div className="h-screen bg-white">
        <div className="flex justify-between px-5 bg-[#F6F6F6] py-5 ">
          <div className="flex flex-col w-10/12 my-auto">
            <div className="flex justify-between ">
              <div className="flex flex-row w-3/12">
                <p className="pr-3 my-auto">Patient Type: </p>
                <div className="flex flex-row ">
                  <div className="flex items-center mr-3">
                    <input
                      id="manual"
                      type="radio"
                      value="manual"
                      checked={patientType === "manual"}
                      onChange={() => handlePatientTypeChange("manual")}
                      className="w-4 h-4 "
                    />
                    <label
                      htmlFor="manual"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Manual
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="appointed"
                      type="radio"
                      value="appointed"
                      checked={patientType === "appointed"}
                      onChange={() => handlePatientTypeChange("appointed")}
                      className="w-4 h-4 "
                    />
                    <label
                      htmlFor="appointed"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Appointed
                    </label>
                  </div>
                </div>
              </div>
              {patientType === "manual" ? (
                <div className="relative w-7/12">
                  <input
                    type="text"
                    className="border border-[#BCBDBE] h-10 w-full px-2 rounded-lg focus:outline-none hover:cursor-pointer bg-white"
                    placeholder="Search patients by name or serial number"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => setShowResults(true)}
                  />
                  <span className="absolute top-1 right-5">
                    <IoSearchOutline size={30} className="text-bg-color" />
                  </span>
                  <div
                    className={`search-results absolute bg-white w-full border border-[#BCBDBE] rounded-md p-2  ${
                      showResults ? "visible" : "hidden"
                    }`}
                  >
                    <div className="custom-scrollbar max-h-20 overflow-y-auto">
                      {filteredPatients.map((patient) => (
                        <div
                          key={patient.id}
                          onClick={() => handleSelectPatient(patient)}
                          className="cursor-pointer border-b border-[#BCBDBE] pb-1"
                        >
                          <p>
                            <span>{patient.id}</span> || <span></span>
                            {patient.name} || <span></span>
                            <span className="text-xs">{patient.mobile}</span>
                          </p>
                        </div>
                      ))}
                      {filteredPatients.length === 0 && (
                        <div className="text-gray-500">No results found</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row w-7/12">
                  {filteredPatients.length > 0 ? (
                    <select
                      className="border border-[#BCBDBE] h-10 px-2 rounded-lg focus:outline-none hover:cursor-pointer w-full bg-white"
                      onChange={(e) =>
                        handleSelectPatient(
                          PrescriptionArray.find(
                            (patient) => patient.id === parseInt(e.target.value)
                          )
                        )
                      }
                      defaultValue="default"
                    >
                      <option value="default" disabled>
                        Select a patient
                      </option>
                      {filteredPatients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          <p>
                            <span>{patient.id}</span> || <span></span>
                            {patient.name} || <span></span>
                            <span className="text-xs">{patient.mobile}</span>
                          </p>
                          {/* {patient.name} */}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-white px-5 py-1.5 rounded-md bg-red w-full my-auto">
                      No more appointments today
                    </div>
                  )}
                  <div className="mx-5"></div>
                  <input
                    type="date"
                    className="border border-[#BCBDBE] h-10 px-2 rounded-lg focus:outline-none hover:cursor-pointer bg-white"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              )}
              <div className="mx-5"></div>
              <div className="w-2/12">
                <button
                  className="border px-5 py-1.5 rounded-md border-bg-color bg-bg-color text-white hover:bg-bg-hover duration-700 w-full"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Register Patient
                </button>
                {showModal && (
                  <Modal
                    title="Registering New Patient"
                    content={
                      <>
                        <RegisterPatients
                          closeModal={() => setShowModal(false)}
                        />
                      </>
                    }
                    onClose={handleCloseModal}
                    modalWidth="947px"
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between text-[#212427CC] font-semibold mt-2">
              <p className="text-start">
                Name{" "}
                <span className=" ">
                  :{selectedPatient ? selectedPatient.name : "Nothing found"}
                </span>
              </p>
              <p>
                Age{" "}
                <span>
                  :{selectedPatient ? selectedPatient.age : "Nothing found"}
                </span>
              </p>
              <p>
                Sex{" "}
                <span>
                  :{selectedPatient ? selectedPatient.sex : "Nothing found"}
                </span>
              </p>
              <p>
                Blood{" "}
                <span>
                  :{selectedPatient ? selectedPatient.blood : "Nothing found"}
                </span>
              </p>
              <p>
                Date{" "}
                <span>
                  :{selectedPatient ? selectedPatient.create : "Nothing found"}
                </span>
              </p>
            </div>
          </div>
          <div className="mx-5"></div>
          <div className="bg-[#EDF3F3] border border-[#A6D9DA] rounded-md p-2 w-2/12">
            <div className="flex justify-between ">
              <div className="flex flex-col text-[#212427CC]/80 hover:text-bg-hover duration-700 my-auto">
                <PiNotebookFill size={30} className="mx-auto" />
                <p className="mx-auto text-center text-sm font-semibold">
                  Preview
                </p>
              </div>
              <div className="flex flex-col text-[#212427CC]/80 hover:text-bg-hover duration-700 my-auto mx-5">
                <RiPrinterCloudFill size={30} className="mx-auto" />
                <p className="mx-auto text-center text-sm font-semibold">
                  Print W/O Header
                </p>
              </div>
              <div className="flex flex-col text-[#212427CC]/80 hover:text-bg-hover duration-700 my-auto">
                <IoMdPrint size={30} className="mx-auto" />
                <p className="mx-auto text-center text-sm font-semibold">
                  Save & Print
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <GenPrescription />
        </div>
      </div>
    </>
  );
};

export default Prescription;
