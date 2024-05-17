import React, { useState } from "react";
import Complaint from "./Complaint";
import Modal from "../common/Modal";
import Investigation from "./Investigation";
import Medication from "./Medication";
import Advice from "./Advice";
import History from "./History";
import FollowUp from "./FollowUp";

import { RxCross1 } from "react-icons/rx";

const GenPrescription = () => {
  const [showModalCompplaint, setShowModalCompplaint] = useState(false);
  const [showModalMedication, setShowModalMedication] = useState(false);
  const [showModalInvestigation, setShowModalInvestigation] = useState(false);
  const [showModalAdvice, setShowModalAdvice] = useState(false);
  const [showModalHistory, setShowModalHistory] = useState(false);
  const [showModalFollowUp, setShowModalFollowUp] = useState(false);
  const handleCloseModal = () => {
    setShowModalMedication(false);
    setShowModalCompplaint(false);
    setShowModalInvestigation(false);
    setShowModalAdvice(false);
    setShowModalFollowUp(false);
    setShowModalHistory(false);
  };
  return (
    <>
      <div className="flex justify-between mt-6 px-5">
        <div className="w-3/12 ">
          <div className="border border-[#F1F1F1] mb-6 h-40">
            <div className="flex justify-between border-b border-[#F1F1F1]">
              <p className="px-2">Complaints</p>
              <button
                type="button"
                className="px-2 text-bg-color cursor-pointer"
                onClick={() => setShowModalCompplaint(true)}
              >
                Add
              </button>
              {showModalCompplaint && (
                <Modal
                  title="Compplaint"
                  content={
                    <>
                      <Complaint
                        closeModal={() => setShowModalCompplaint(false)}
                      />
                    </>
                  }
                  onClose={handleCloseModal}
                />
              )}
            </div>
            <div className="flex justify-between px-2 mb-2">
              <p className="my-auto">Fever - 103 - 3days</p>
              <RxCross1
                size={30}
                className="my-auto text-red cursor-pointer  p-1"
              />
            </div>
          </div>
          <div className="border border-[#F1F1F1] mb-6 h-40">
            <div className="flex justify-between border-b border-[#F1F1F1]">
              <p className="px-2">History</p>
              <button
                type="button"
                className="px-2 text-bg-color cursor-pointer"
                onClick={() => setShowModalHistory(true)}
              >
                Add
              </button>
              {showModalHistory && (
                <Modal
                  title="History"
                  content={
                    <>
                      <History closeModal={() => setShowModalHistory(false)} />
                    </>
                  }
                  onClose={handleCloseModal}
                  // modalWidth="947px"
                  modalHeight="300px"
                />
              )}
            </div>
            <div className="flex justify-between px-2 mb-2">
              <p className="my-auto">Fever - 103 - 3days</p>
              <RxCross1
                size={30}
                className="my-auto text-red cursor-pointer  p-1"
              />
            </div>
          </div>
          <div className="border border-[#F1F1F1] mb-6 h-40">
            <div className="flex justify-between border-b border-[#F1F1F1]">
              <p className="px-2">Investigation</p>
              <button
                type="button"
                className="px-2 text-bg-color cursor-pointer"
                onClick={() => setShowModalInvestigation(true)}
              >
                Add
              </button>
              {showModalInvestigation && (
                <Modal
                  title="Investigation"
                  content={
                    <>
                      <Investigation
                        closeModal={() => setShowModalInvestigation(false)}
                      />
                    </>
                  }
                  onClose={handleCloseModal}
                  // modalWidth="947px"
                  modalHeight="300px"
                />
              )}
            </div>
            <div className="flex justify-between px-2 mb-2">
              <p className="my-auto">Fever - 103 - 3days</p>
              <RxCross1
                size={30}
                className="my-auto text-red cursor-pointer  p-1"
              />
            </div>
          </div>
        </div>
        <div className="mx-3"></div>
        <div className="w-full  bg-[#FAFAFA] rounded-md p-6">
          <div className=" ">
            <div className="flex justify-between">
              <p className="text-xl font-bold">RX</p>
              <div className="flex justify-between mb-6">
                <button
                  type="button"
                  className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                  onClick={() => setShowModalMedication(true)}
                >
                  Medication
                </button>
                {showModalMedication && (
                  <Modal
                    title="Medication"
                    content={
                      <>
                        <Medication
                          closeModal={() => setShowModalMedication(false)}
                        />
                      </>
                    }
                    onClose={handleCloseModal}
                    // modalWidth="947px"
                    // modalHeight="100px"
                  />
                )}
                <button
                  type="button"
                  className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                  onClick={() => setShowModalAdvice(true)}
                >
                  Advice
                </button>
                {showModalAdvice && (
                  <Modal
                    title="Advice"
                    content={
                      <>
                        <Advice closeModal={() => setShowModalAdvice(false)} />
                      </>
                    }
                    onClose={handleCloseModal}
                    // modalWidth="947px"
                    modalHeight="300px"
                  />
                )}
                <button
                  type="button"
                  className="border mx-5 bg-white text-bg-color border-bg-color hover:bg-bg-color hover:text-white hover:border-bg-color duration-700 px-3 text-lg rounded-sm"
                  onClick={() => setShowModalFollowUp(true)}
                >
                  FollowUp
                </button>
                {showModalFollowUp && (
                  <Modal
                    title="FollowUp"
                    content={
                      <>
                        <FollowUp
                          closeModal={() => setShowModalFollowUp(false)}
                        />
                      </>
                    }
                    onClose={handleCloseModal}
                    // modalWidth="947px"
                  />
                )}
              </div>
            </div>
            <div className="px-10 py-5">
              <div className=" mx-auto w-full">
                <div className="flex justify-between mb-6 font-semibold text-sm">
                  <p className="w-1/12 my-auto font-bold">1</p>
                  <p className="flex flex-col w-full my-auto">
                    <span>Tab. DOXIFLO 200</span>
                    <span>১+০+১</span>
                  </p>
                  <p className="w-full my-auto">- ১০ দিন</p>
                </div>
              </div>
              <div className="flex flex-col mb-6 text-sm font-semibold">
                <p className="text-base font-bold mb-2 underline ">উপদেশঃ</p>
                <p>
                  . প্রচুর তরল খাবার (পানি/ডাবের পানি/ওরস্যালাইন/শরবত) খাবেন
                </p>
                <p>. জ্বর হলে স্বাভাবিক তাপমাত্রার পানি দিয়ে গা মুছিয়ে দিবেন</p>
              </div>
              <div className="flex flex-col mb-6 text-sm font-semibold">
                <p className="text-base font-bold mb-2 underline ">
                  পরবর্তি সাক্ষাতঃ
                </p>
                <p>. ৭ দিন পর জ্বর না কমলে টেস্টের রিপোর্ট সহ সাক্ষাত করবেন</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3"></div>
        <div className="w-4/12  ">
          <div className="bg-[#FAFAFA] rounded-md p-6  font-semibold">
            <div className="flex flex-col">
              <p className="text-xl font-bold border-b pb-2 mb-5 border-[#F1F1F1]">
                Patient Information
              </p>
              <p>Mohammad Abdur Rahman</p>
              <p>Non-appointed Patient</p>
              <p>26 Years old</p>
              <p>Male</p>
              <p>01829337634</p>
              <p>62KG</p>
              <p className="">
                Gazi Dipo Lane, 82 No. Majhirghat Road, East Madarbari,
                Chattogram.
              </p>
              <p>26th April, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenPrescription;
