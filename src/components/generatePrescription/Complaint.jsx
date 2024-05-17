// import React from "react";

// const Complaint = () => {
//   return (
//     <>
//       <div>Complaint</div>
//     </>
//   );
// };

// export default Complaint;
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BiReset } from "react-icons/bi";
import Favorites from "../common/Favorites";
import DropdownModal from "../common/DropdownModal";
import complaintData from "../../array/complaint";

const Complaint = ({ closeModal }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingIpv, setIsEditingIpv] = useState(false);
  const [comName, setComName] = useState("");
  const [Ipv, setIpv] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationUnit, setDurationUnit] = useState("Days");
  const [note, setNote] = useState("");
  const [complaints, setComplaints] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const handleNameIconClick = () => {
    setIsEditing(!isEditing);
  };

  const handleIpvIconClick = () => {
    setIsEditingIpv(!isEditingIpv);
  };
  const handleFavoriteItemClick = (itemName) => {
    setComName(itemName);
  };

  const handleAddToList = () => {
    const newcomplaint = {
      comName,
      Ipv,
      duration: `${duration} ${durationUnit}`,

      note,
    };
    setComplaints([...complaints, newcomplaint]);
    setComName("");
    setIpv("");
    setDuration(1);
    setDurationUnit("Days");

    setNote("");
    // Check if the complaint has been added or searched three times
    const compCount = complaints.filter(
      (comp) => comp.comName === comName
    ).length;
    if (compCount >= 3) {
      // Find the index of the complaint in favorites
      const existingFavoriteIndex = favorites.findIndex(
        (item) => item.name === comName
      );

      // If the complaint is already in favorites, update its count
      if (existingFavoriteIndex !== -1) {
        const updatedFavorites = [...favorites];
        updatedFavorites[existingFavoriteIndex].count++;
        setFavorites(updatedFavorites);
      } else {
        // If the complaint is not in favorites, add it with count 1
        if (favorites.length >= 20) {
          // If favorites list is full, remove the first item
          const updatedFavorites = favorites.slice(1);
          updatedFavorites.push({ name: comName, count: 1 });
          setFavorites(updatedFavorites);
        } else {
          setFavorites([...favorites, { name: comName, count: 1 }]);
        }
      }
    }
  };

  const handleRemoveItem = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints.splice(index, 1);
    setComplaints(updatedComplaints);
  };

  const handleSubmit = () => {
    console.log("Submitted data:", complaints);
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
            {/* Add complaint */}
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
                        placeholder="Search complaint"
                        onChange={(e) => {
                          const searchTerm = e.target.value.toLowerCase();
                          const filteredResults = complaintData.filter((comp) =>
                            comp.name.toLowerCase().includes(searchTerm)
                          );
                          setSearchResults(filteredResults);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        className="border-b border-[#BCBDBE] h-[33px] w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                        placeholder="Type complaint"
                        value={comName}
                        onChange={(e) => setComName(e.target.value)}
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
                                setComName(result.name);
                                setIsEditing(false);
                              }}
                            >
                              <p>{result.name}</p>
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
                <p>Value</p>
                <div className="flex flex-row">
                  {isEditingIpv ? (
                    <IoSearchOutline
                      size={30}
                      className="my-auto text-bg-color cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleIpvIconClick}
                    />
                  ) : (
                    <CiEdit
                      size={30}
                      className="my-auto text-red cursor-pointer bg-[#EEEEEE] p-1"
                      onClick={handleIpvIconClick}
                    />
                  )}
                  <div className=" ">
                    {isEditingIpv ? (
                      <DropdownModal
                        options={["1+0+0", "0+1+0", "0+0+1"]}
                        defaultOption="Select an option"
                        bgColor="#fff"
                        dHeight="30px"
                        onSelect={(selectedOption) => setIpv(selectedOption)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="border-b border-[#BCBDBE] h-[30px] w-[70px] px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                        placeholder="0+1+0"
                        value={Ipv}
                        onChange={(e) => setIpv(e.target.value)}
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
            {/* Added complaint list */}
            <div className="mt-6 px-1.5 h-40 overflow-y-auto custom-scrollbar">
              <table className="table ">
                <tbody>
                  {complaints.map((complaint, index) => (
                    <tr key={index} className="border-b border-[#D9D9D9] ">
                      <td className=" ">{complaint.comName}</td>
                      <td className="">{complaint.Ipv}</td>
                      <td className="">{complaint.duration}</td>

                      <td className="">{complaint.note}</td>
                      <td className="">
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
              <BiReset onClick={() => setComplaints([])} className="my-auto" />
              <p className="pl-2">Reset Form</p>
            </div>
            <div className="flex flex-row">
              <button
                className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                onClick={handleSubmit}
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

export default Complaint;
