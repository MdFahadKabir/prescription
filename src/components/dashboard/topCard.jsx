import React from "react";
import { Link } from "react-router-dom";

const TopCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-center text-center px-8 py-4 h-40 items-center">
        <div className="bg-[#A3E4D7] h-full flex items-center  rounded-md shadow-md">
          <div className="mx-auto">
            <p>Today make</p>
            <p>0</p>
          </div>
        </div>
        <div className="bg-[#A9DFBF] h-full flex items-center rounded-md shadow-md">
          <div className="mx-auto">
            <p>Total make</p>
            <p>0</p>
          </div>
        </div>
        <div className="bg-[#ABEBC6] h-full  rounded-md shadow-md">
          <Link
            to="/generate-prescription"
            className="mx-auto h-full w-full cursor-pointer flex items-center justify-center text-[25px]"
          >
            Make Prescription
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopCard;
