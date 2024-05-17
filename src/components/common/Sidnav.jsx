import React from "react";
import { RxCross1 } from "react-icons/rx";
import Preference from "../Preference/Preference";

const Sidnav = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-1/3 bg-white h-full z-50 shadow-lg transition-transform duration-300 transform translate-x-0 ease-in-out">
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <p className="text-black_3 text-xl font-semibold">
          Preference Settings
        </p>
        <button className=" focus:outline-none my-auto" onClick={onClose}>
          <RxCross1 className="text-black_1  hover:text-bg-color duration-700" />
        </button>
      </div>
      <div className="p-4">
        <Preference />
      </div>
    </div>
  );
};

export default Sidnav;
