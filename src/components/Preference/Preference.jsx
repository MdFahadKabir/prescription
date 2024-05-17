// import React, { useState } from "react";
// import preferenceSettings from "../../array/preferenceSettings"; // Assuming you have the preference settings array

// const Preference = () => {
//   const [settings, setSettings] = useState(preferenceSettings);

//   const handleCheckboxChange = (categoryIndex, childIndex) => {
//     const updatedSettings = [...settings];
//     updatedSettings[categoryIndex].childArray[childIndex].active =
//       !updatedSettings[categoryIndex].childArray[childIndex].active;
//     setSettings(updatedSettings);
//   };

//   return (
//     <>
//       <div role="tablist" className="tabs tabs-bordered ">
//         {settings.map((category, categoryIndex) => (
//           <React.Fragment key={categoryIndex}>
//             <input
//               type="radio"
//               name="my_tabs_1"
//               role="tab"
//               className="tab  w-full "
//               id={`tab-${categoryIndex}`}
//               aria-label={category.category}
//               defaultChecked={categoryIndex === 0}
//             />
//             <div
//               role="tabpanel"
//               className="tab-content "
//               aria-labelledby={`tab-${categoryIndex}`}
//             >
//               <div>
//                 <p className="py-5 text-xs text-black_3 font-medium">{`Mark the patient’s ${category.category.toLowerCase()}`}</p>
//                 {category.childArray.map((setting, settingIndex) => (
//                   <div className="flex justify-between mb-2" key={settingIndex}>
//                     <p className="text-sm font-semibold">{setting.name}</p>
//                     <div className="">
//                       <input
//                         type="checkbox"
//                         className={`toggle toggle-sm bg-white hover:bg-white duration-700 border-white ${
//                           setting.active
//                             ? "[--tglbg:#009294] right-0"
//                             : "[--tglbg:#DADADA] left-0"
//                         }`}
//                         defaultChecked={setting.active}
//                         onChange={() =>
//                           handleCheckboxChange(categoryIndex, settingIndex)
//                         }
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Preference;
import React, { useState } from "react";
import preferenceSettings from "../../array/preferenceSettings"; // Assuming you have the preference settings array

import { AiOutlineFileSearch } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { TbMedicineSyrup } from "react-icons/tb";

const Preference = () => {
  const [settings, setSettings] = useState(preferenceSettings);
  const [activeTab, setActiveTab] = useState(0); // Initial active tab index

  const handleCheckboxChange = (categoryIndex, settingIndex) => {
    const updatedSettings = [...settings];
    updatedSettings[categoryIndex].childArray[settingIndex].active =
      !updatedSettings[categoryIndex].childArray[settingIndex].active;
    setSettings(updatedSettings);
  };

  return (
    <div className="flex">
      {/* Left side tabs */}
      <div className="tabs  flex flex-col w-full  ">
        {settings.map((category, categoryIndex) => (
          <React.Fragment key={categoryIndex}>
            <input
              type="radio"
              name="tabs"
              role="tab"
              id={`tab-${categoryIndex}`}
              className="hidden"
              defaultChecked={categoryIndex === activeTab}
            />
            <label
              htmlFor={`tab-${categoryIndex}`}
              className={`tab ${
                categoryIndex === activeTab
                  ? "active-tab text-bg-color bg-[#E5F4F4] border-l-4 border-bg-color"
                  : "text-[#616466] bg-[#F9F9F9]"
              } flex justify-start w-full mb-3 `}
              onClick={() => setActiveTab(categoryIndex)}
            >
              <div className="flex justify-start ">
                {categoryIndex === 0 && (
                  <FaRegAddressBook size={20} className=" my-auto " />
                )}

                {categoryIndex === 1 && (
                  <AiOutlineFileSearch size={20} className=" my-auto " />
                )}
                {categoryIndex === 2 && (
                  <MdOutlineMonitorHeart size={20} className=" my-auto " />
                )}
                {categoryIndex === 3 && (
                  <TbMedicineSyrup size={20} className=" my-auto " />
                )}
                <p className="text-start text-lg font-semibold">
                  {category.category}
                </p>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>

      {/* Right side tab content */}
      <div className="w-full">
        {settings.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`tab-content ${
              categoryIndex === activeTab ? "block" : "hidden"
            }`}
          >
            <div>
              <p className=" text-base text-black_3 font-medium">{`Mark the patient’s ${category.category.toLowerCase()}`}</p>
              {category.childArray.map((setting, settingIndex) => (
                <div className="flex justify-between mb-2" key={settingIndex}>
                  <p className="text-sm font-semibold">{setting.name}</p>
                  <div className="">
                    <input
                      type="checkbox"
                      className={`toggle toggle-sm bg-white hover:bg-white duration-700 border-white ${
                        setting.active
                          ? "[--tglbg:#009294] right-0"
                          : "[--tglbg:#DADADA] left-0"
                      }`}
                      defaultChecked={setting.active}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, settingIndex)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preference;
