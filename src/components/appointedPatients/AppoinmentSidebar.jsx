import React from "react";
import chambers from "../../array/chambers";
import AnimatedCounter from "../common/AnimatedCounter";
const AppoinmentSidebar = () => {
  const activeTabData = chambers[0];

  const gridItems = [
    {
      label: "Total appointed Patient Today",
      value: activeTabData.totalp_attended,
      bgColor: "#FBFBFB",
    },
    {
      label: "Total Walk In Patient",
      value: activeTabData.wp_attended,
      bgColor: "#FBFBFB",
    },
    {
      label: "Total Appointed Patient",
      value: activeTabData.tap_attended,
      bgColor: "#FBFBFB",
    },
  ];
  return (
    <>
      <div className="">
        {gridItems.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className="py-5 px-10 mb-5 rounded-md"
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
    </>
  );
};

export default AppoinmentSidebar;
