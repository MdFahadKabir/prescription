import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosSettings, IoIosArrowDown } from "react-icons/io";
import logo from "../../../public/assets/logo.png";
import defaultProfileImage from "../../../public/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import chambers from "../../array/chambers";
import Modal from "./Modal";
import Preference from "../Preference/Preference";
import Sidnav from "./Sidnav";

function Header({ title }) {
  let navigate = useNavigate();
  const { userinfo, setUserinfo } = useContext(UserContext);
  const [selectedChamber, setSelectedChamber] = useState(
    chambers[0].hospital_name
  );
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [chamberMenuOpen, setChamberMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleChamberSelect = (chamber) => {
    setSelectedChamber(chamber.hospital_name);
    setChamberMenuOpen(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    // console.log("Modal closed");
  };
  return (
    <>
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 py-2 bg-bg-color ">
        <div className="flex justify-between items-center">
          <div className="">
            <Link to="/dashboard">
              <img className="h-14 w-auto" src={logo} alt="aromo" />
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold text-[22px]  Poppins">
              {title}
            </h3>
          </div>
          <div className="flex items-center space-x-4 ">
            {/* Settings Icon */}

            <IoIosSettings
              className="h-5 w-5 text-white cursor-pointer animate-spin"
              onClick={() => setShowModal(true)}
            />
            {showModal && <Sidnav onClose={handleCloseModal} />}
            {/* Chamber Dropdown */}
            <Menu as="div" className="relative ">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="focus:outline-none border border-white w-[169px] rounded">
                      <p className="absolute -top-2 left-1 px-[4px] text-white bg-bg-color text-xs">
                        Chamber
                      </p>
                      <button
                        className="flex justify-between space-x-1 text-white cursor-pointer w-40 rounded-md"
                        onClick={() => setChamberMenuOpen(!chamberMenuOpen)}
                      >
                        <span className="px-2 py-1 overflow-hidden whitespace-nowrap text-overflow-ellipsis w-32 text-start">
                          {selectedChamber}
                        </span>
                        <IoIosArrowDown className="h-4 w-4 my-auto" />
                      </button>
                    </Menu.Button>
                  </div>
                  <Transition
                    show={chamberMenuOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        {chambers.map((chamber) => (
                          <Menu.Item key={chamber.id}>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                )}
                                onClick={() => handleChamberSelect(chamber)}
                              >
                                {chamber.hospital_name}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            {/* Dropdown Menu for Profile */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="focus:outline-none">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`${import.meta.env.VITE_IMG_SERVER}${
                          userinfo.imageFile || defaultProfileImage
                        }`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                              onClick={logout}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
