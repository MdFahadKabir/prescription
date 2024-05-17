import React from "react";
import AnimatedCounter from "../common/AnimatedCounter";
const AttendedCard = ({ activeTabData }) => {
  const gridItems = [
    {
      label: "Patient attended Today",
      value: activeTabData.tp_attended,
      bgColor: "#DADADA",
    },
    {
      label: "Patient attended This Month",
      value: activeTabData.mp_attended,
      bgColor: "#F5F8F2",
    },
    {
      label: "Patient attended Till Now",
      value: activeTabData.totalp_attended,
      bgColor: "#F8F2F2",
    },
    {
      label: "Total Walk In Patient",
      value: activeTabData.wp_attended,
      bgColor: "#F2F5F8",
    },
    {
      label: "Total Appointed Patient",
      value: activeTabData.tap_attended,
      bgColor: "#F8F2F8",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {gridItems.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item.bgColor }}
          className="p-5 rounded-md"
        >
          <AnimatedCounter
            startValue={0}
            endValue={item.value}
            duration={1000}
          />
          <p className="text-black_1 mt-16 border-t border-gray font-semibold">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AttendedCard;
