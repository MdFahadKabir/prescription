import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BiReset } from "react-icons/bi";
import Favorites from "./Favorites";

const CommonSection = ({ closeModal, title, placeholder, data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [tableData, setTableData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleIconClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== "") {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchItemClick = (name) => {
    setInputValue(name);
    setSearchResults([]);
    setIsEditing(false); // Hide search results
  };

  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      const newItem = { name: inputValue, description: noteValue };
      setTableData([...tableData, newItem]);
      setSearchResults([]); // Clear search results
      setInputValue("");
      setNoteValue("");

      // Check if the item has been added or searched three times
      const favoriteCount = tableData.filter(
        (item) => item.name === inputValue
      ).length;
      if (favoriteCount >= 3) {
        // Find the index of the item in favorites
        const existingFavoriteIndex = favorites.findIndex(
          (item) => item.name === inputValue
        );

        // If the item is already in favorites, update its count
        if (existingFavoriteIndex !== -1) {
          const updatedFavorites = [...favorites];
          updatedFavorites[existingFavoriteIndex].count++;
          setFavorites(updatedFavorites);
        } else {
          // If the item is not in favorites, add it with count 1
          if (favorites.length >= 20) {
            // If favorites list is full, remove the first item
            const updatedFavorites = favorites.slice(1);
            updatedFavorites.push({ name: inputValue, count: 1 });
            setFavorites(updatedFavorites);
          } else {
            setFavorites([...favorites, { name: inputValue, count: 1 }]);
          }
        }
      }
    }
  };

  const handleRemoveFromList = (index) => {
    const newList = [...tableData];
    newList.splice(index, 1);
    setTableData(newList);
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", tableData);
    closeModal();
  };

  const handleReset = () => {
    setTableData([]);
  };

  return (
    <>
      <div>
        {/* Favorites */}
        <Favorites
          favoriteItems={favorites}
          onFavoriteItemClick={handleSearchItemClick}
        />
      </div>
      {/* Common Section */}
      <div>
        <div className="border p-6">
          {/* Add Comment */}
          <div className="flex justify-between">
            <div className="flex flex-col mx-2">
              <p>{title}</p>
              <div className="flex flex-row">
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
                <div className=" ">
                  {isEditing ? (
                    <input
                      type="text"
                      className="border-b border-[#D9D9D9] h-7 w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                      placeholder={`Search ${placeholder}`}
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-b border-[#BCBDBE] h-7 w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
                      placeholder={`Type ${placeholder}`}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
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
            </div>
            <div className="flex flex-col mx-2">
              <p>Note</p>
              <input
                type="text"
                className="border-b border-[#D9D9D9] h-[26px] w-full px-2  focus:outline-none hover:cursor-pointer bg-white"
                placeholder="Write note"
                value={noteValue}
                onChange={(e) => setNoteValue(e.target.value)}
              />
            </div>
            <div>
              <button
                className="border mb-0 mt-4 p-1"
                onClick={handleAddToList}
              >
                Add to List
              </button>
            </div>
          </div>
          {/* Added Comments list */}
          <div className="mt-6  px-1.5 h-40 overflow-y-auto custom-scrollbar">
            <table className="table">
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className="border-b border-[#D9D9D9]">
                    <td className="w-5/12 px-5">{item.name}</td>
                    <td className="w-6/12 px-5">{item.description}</td>
                    <td className="w-1">
                      <RxCross1
                        className="text-red"
                        onClick={() => handleRemoveFromList(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between">
          {/* reset the table */}
          <div className="flex flex-row">
            <BiReset onClick={handleReset} />
            <p>Reset</p>
          </div>
          <div className="flex flex-row">
            <button className="border mx-5" onClick={closeModal}>
              Cancel
            </button>
            <button className="border" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSection;
