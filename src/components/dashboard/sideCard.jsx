import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import chambers from "../../array/chambers";
const SideCard = ({ setActiveTabData }) => {
  const { userinfo } = useContext(UserContext); // Removed setUserinfo since it's not needed here
  console.log(userinfo);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // Set the active tab to the first one initially
  useEffect(() => {
    setActiveTabData(chambers[activeTabIndex]);
  }, []);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    // Pass active tab data to Dashboard component
    setActiveTabData(chambers[index]);
  };
  return (
    <div>
      <div className="h-screen border-light-gray border-r-[1px]">
        <div className="h-auto flex items-center">
          <img
            src={`${import.meta.env.VITE_IMG_SERVER}${userinfo.imageFile}`} // Fixed the interpolation syntax
            alt=""
            className="h-20 w-20 mx-auto rounded-full object-cover mt-16 mb-8"
          />
        </div>
        <ul className="list-none  w-full text-center text-gray text-sm ">
          <li className="">
            {userinfo
              ? `${userinfo.title} ${userinfo.first_name} ${userinfo.last_name}`
              : "Loading..."}
          </li>
          <li>{userinfo.doctor_type}</li>
          <li>{userinfo.bmdc_registration}</li>
        </ul>
        <div className="mt-5">
          <p className="px-2 font-bold">Chambers</p>
          <div>
            {chambers.map((chamber, index) => (
              <div
                key={chamber.id}
                className={` border-l-4 border-bg-color m-2 ${
                  activeTabIndex === index
                    ? "active-tab bg-bg-color text-white -2 hover:bg-light-paste hover:text-gray duration-700"
                    : "bg-light-paste hover:bg-bg-color hover:text-white duration-700"
                }`}
                onClick={() => handleTabClick(index)}
                npm
                rounded
              >
                <p className="pl-5">{chamber.hospital_name}</p>
                <p className="pl-5">{chamber.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
