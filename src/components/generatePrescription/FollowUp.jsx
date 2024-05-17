import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import followup from "../../array/followup";

const FollowUp = ({ closeModal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleIconClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      // Reset search results when switching to editing mode
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Perform search operation here
    const results = followup.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearchItemClick = (name) => {
    setInputValue(name);
    setIsEditing(false); // Hide search results
    addData(name);
  };

  const addData = (data) => {
    if (data.trim() !== "") {
      // Add the data to submittedData
      setSubmittedData([...submittedData, data]);
      setInputValue("");
    }
  };

  const handleSubmit = () => {
    // Perform submission logic here
    console.log("Submitted Data:", submittedData);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // Handle adding data when Enter key is pressed
      addData(inputValue);
    }
  };

  return (
    <>
      <div className="flex flex-col mx-2 w-full">
        <div className="flex flex-row w-full  ">
          {isEditing ? (
            <IoSearchOutline
              size={30}
              className="my-auto text-bg-color cursor-pointer"
              onClick={handleIconClick}
            />
          ) : (
            <CiEdit
              size={30}
              className="my-auto text-red cursor-pointer"
              onClick={handleIconClick}
            />
          )}
          <div className="w-full ">
            <input
              type="text"
              className="border-b border-[#D9D9D9] h-7 w-full px-2 -mt-1 focus:outline-none hover:cursor:pointer bg-white"
              placeholder="Search or Add Data"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Handle Enter key press
            />
          </div>
        </div>
        {/* Search Results */}
        {isEditing && (
          <div className="relative w-full ">
            <div className="search-results absolute bg-white w-full border border-[#BCBDBE] rounded-md p-2">
              <div className="custom-scrollbar max-h-20 overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="cursor-pointer border-b border-[#BCBDBE] pb-1"
                      onClick={() => handleSearchItemClick(result.name)}
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
        {/* Show added data */}
        <div className="my-6 border p-6">
          {submittedData.map((data, index) => (
            <div key={index}>{data} - পর আবার দেখা করবেন</div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="flex justify-between">
            <button
              className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
              onClick={closeModal}
            >
              {" "}
              Cancel
            </button>
            <button
              className="border bg-bg-color text-white border-bg-color hover:bg-white hover:text-bg-color hover:border-bg-color duration-700 px-3 text-lg rounded-sm "
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUp;
