import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ title, content, onClose, modalWidth }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {showModal ? (
        <>
          {/* Backdrop */}
          <div className="fixed -inset-x-10 inset-y-0 z-50 bg-black_1 bg-opacity-40 backdrop-blur-sm"></div>
          {/* Modal */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className={`relative  w-[947px]   my-6 mx-auto`}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 rounded-t-md">
                  <h3 className="text-xl font-semibold my-auto">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black_1 opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-bg-hover duration-700"
                    onClick={handleCloseModal}
                  >
                    <RxCross1 />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">{content}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
