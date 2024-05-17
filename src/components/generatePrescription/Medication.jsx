import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BiReset } from "react-icons/bi";
import Favorites from "../common/Favorites";
import DropdownModal from "../common/DropdownModal";
import medicineData from "../../array/medicine";

const Medication = ({ closeModal }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingDose, setIsEditingDose] = useState(false);
  const [medName, setMedName] = useState("");
  const [dose, setDose] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationUnit, setDurationUnit] = useState("Days");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [medications, setMedications] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const handleNameIconClick = () => {
    setIsEditing(!isEditing);
  };

  const handleDoseIconClick = () => {
    setIsEditingDose(!isEditingDose);
  };
  const handleFavoriteItemClick = (itemName) => {
    setMedName(itemName);
  };

  const handleAddToList = () => {
    const newMedication = {
      medName,
      dose,
      duration: `${duration} ${durationUnit}`,
      time,
      note,
    };
    setMedications([...medications, newMedication]);
    setMedName("");
    setDose("");
    setDuration(1);
    setDurationUnit("Days");
    setTime("");
    setNote("");
    // Check if the medication has been added or searched three times
    const medCount = medications.filter(
      (med) => med.medName === medName
    ).length;
    if (medCount >= 3) {
      // Find the index of the medication in favorites
      const existingFavoriteIndex = favorites.findIndex(
        (item) => item.name === medName
      );

      // If the medication is already in favorites, update its count
      if (existingFavoriteIndex !== -1) {
        const updatedFavorites = [...favorites];
        updatedFavorites[existingFavoriteIndex].count++;
        setFavorites(updatedFavorites);
      } else {
        // If the medication is not in favorites, add it with count 1
        if (favorites.length >= 20) {
          // If favorites list is full, remove the first item
          const updatedFavorites = favorites.slice(1);
          updatedFavorites.push({ name: medName, count: 1 });
          setFavorites(updatedFavorites);
        } else {
          setFavorites([...favorites, { name: medName, count: 1 }]);
        }
      }
    }
    // const existingFavoriteIndex = favorites.findIndex(
    //   (item) => item.name === medName
    // );
    // if (existingFavoriteIndex !== -1) {
    //   const updatedFavorites = [...favorites];
    //   updatedFavorites.splice(existingFavoriteIndex, 1);
    //   updatedFavorites.push({ name: medName, count: 1 });
    //   setFavorites(updatedFavorites);
    // } else {
    //   if (favorites.length >= 20) {
    //     const updatedFavorites = favorites.slice(1);
    //     updatedFavorites.push({ name: medName, count: 1 });
    //     setFavorites(updatedFavorites);
    //   } else {
    //     setFavorites([...favorites, { name: medName, count: 1 }]);
    //   }
    // }
  };
  // Filter favorite items based on the count condition
  // const filteredFavorites = favorites.filter((item) => item.count >= 3);

  const handleRemoveItem = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  const handleSubmit = () => {
    console.log("Submitted data:", medications);
    closeModal();
  };

  return (
    <>
      <div className="">
        <div>
          {/* Favorites */}
          <Favorites
            favoriteItems={favorites}
            onFavoriteItemClick={handleFavoriteItemClick}
          />
        </div>
        {/* Search Section */}
        <div className=" ">
          <div className="border p-6">
            {/* Add Medication */}
            <div className="flex justify-between">
              <div className="flex flex-col mx-2">
                <p>Name</p>
                <div className="flex flex-row">
                  {isEditing ? (
                    <IoSearchOutline
                      size={30}
                      className="my-auto text-bg-color cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleNameIconClick}
                    />
                  ) : (
                    <CiEdit
                      size={30}
                      className="my-auto text-red cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleNameIconClick}
                    />
                  )}
                  <div className=" ">
                    {isEditing ? (
                      <input
                        type="text"
                        className="border-b border-[#D9D9D9] h-[30px] w-full px-2 focus:outline-none hover:cursor-pointer bg-white"
                        placeholder="Search medicine"
                        onChange={(e) => {
                          const searchTerm = e.target.value.toLowerCase();
                          const filteredResults = medicineData.filter((med) =>
                            med.name.toLowerCase().includes(searchTerm)
                          );
                          setSearchResults(filteredResults);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        className="border-b border-[#BCBDBE] h-[33px] w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                        placeholder="Type medicine"
                        value={medName}
                        onChange={(e) => setMedName(e.target.value)}
                      />
                    )}
                  </div>
                </div>
                {/* Search Results */}
                {isEditing && (
                  <div className="relative w-full">
                    <div className="search-results absolute bg-white w-full border border-[#BCBDBE] rounded-md p-2">
                      <div className="custom-scrollbar max-h-20 overflow-y-auto">
                        {searchResults.length > 0 ? (
                          searchResults.map((result, index) => (
                            <div
                              key={index}
                              className="cursor-pointer border-b border-[#BCBDBE] pb-1"
                              onClick={() => {
                                setMedName(result.name);
                                setIsEditing(false);
                              }}
                            >
                              <p>
                                {result.genericName} - {result.name} -{" "}
                                {result.company}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="text-gray-500">No results found</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col mx-2">
                <p>Dose</p>
                <div className="flex flex-row">
                  {isEditingDose ? (
                    <IoSearchOutline
                      size={30}
                      className="my-auto text-bg-color cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleDoseIconClick}
                    />
                  ) : (
                    <CiEdit
                      size={30}
                      className="my-auto text-red cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleDoseIconClick}
                    />
                  )}
                  <div className=" ">
                    {isEditingDose ? (
                      <DropdownModal
                        options={["1+0+0", "0+1+0", "0+0+1"]}
                        defaultOption="Select an option"
                        bgColor="#fff"
                        dHeight="30px"
                        onSelect={(selectedOption) => setDose(selectedOption)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="border-b border-[#BCBDBE] h-[30px] w-[70px] px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                        placeholder="0+1+0"
                        value={dose}
                        onChange={(e) => setDose(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-2">
                <p>Duration</p>
                <div className="flex flex-row">
                  <input
                    type="number"
                    className="border-[#DDDDDD] border-b w-8 h-[30px] bg-white focus:outline-none"
                    placeholder="1"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    required
                  />
                  <div className="mx-1"></div>
                  <DropdownModal
                    options={["Days", "Months", "Week"]}
                    defaultOption="Days"
                    dHeight="30px"
                    bgColor="#fff"
                    onSelect={(selectedOption) => {
                      setDurationUnit(selectedOption);
                      if (selectedOption === "Days") setDuration(1);
                      else if (selectedOption === "Months") setDuration(30);
                      else if (selectedOption === "Week") setDuration(7);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col mx-2">
                <p>Time</p>
                <div className="">
                  <DropdownModal
                    options={["Option 1", "Option 2", "Option 3"]}
                    defaultOption="Option 1"
                    dHeight="30px"
                    bgColor="#fff"
                    onSelect={(selectedOption) => setTime(selectedOption)}
                  />
                </div>
              </div>
              <div className="flex flex-col mx-2">
                <p>Note</p>
                <input
                  type="text"
                  className="border-b border-[#D9D9D9] h-[30px] w-full px-2  focus:outline-none hover:cursor-pointer bg-white"
                  placeholder="Write note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="border bg-bg-color text-white border-bg-color hover:bg-white hover:text-bg-color hover:border-bg-color duration-700 rounded-sm text-lg mb-0  mt-4 p-1"
                  onClick={handleAddToList}
                >
                  Add
                </button>
              </div>
            </div>
            {/* Added Medication list */}
            <div className="mt-6 px-1.5 h-40 overflow-y-auto custom-scrollbar">
              <table className="table-auto ">
                <tbody>
                  {medications.map((medication, index) => (
                    <tr key={index} className="border-b border-[#D9D9D9] ">
                      <td className="  w-[235px]  ">{medication.medName}</td>
                      <td className="  w-[120px] pl-14 ">{medication.dose}</td>
                      <td className="  w-[136px] pl-10 ">
                        {medication.duration}
                      </td>
                      <td className="  w-[105px] pl-5 ">{medication.time}</td>
                      <td className="  w-[215px] pl-6 ">{medication.note}</td>
                      <td className="  w-[80px]">
                        <RxCross1
                          className="text-red ml-5 cursor-pointer"
                          onClick={() => handleRemoveItem(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            {/* Reset and Submit buttons */}
            <div className="flex flex-row text-bg-color text-lg">
              <BiReset onClick={() => setMedications([])} className="my-auto" />
              <p className="pl-2">Reset Form</p>
            </div>
            <div className="flex flex-row">
              <button
                className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                onClick={closeModal}
              >
                {" "}
                Cancel
              </button>
              <button
                className="border bg-bg-color text-white border-bg-color hover:bg-white hover:text-bg-color hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medication;
