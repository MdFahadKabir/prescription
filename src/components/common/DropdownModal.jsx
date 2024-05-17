import React, { useState } from "react";

const DropdownModal = ({
  options,
  defaultOption,
  onSelect,
  dWidth,
  bgColor,
  dHeight,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <select
      // className={`bg-white border w-${dWidth} `}
      className="border-[#DDDDDD] border  text-[#717171]"
      style={{
        width: dWidth || "auto",
        height: dHeight || "auto",
        backgroundColor: bgColor || "#fff",
      }}
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownModal;
