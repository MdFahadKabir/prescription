import React from "react";

import investigation from "../../array/investigation";
import CommonSection from "../common/CommonSection";

const Investigation = ({ closeModal }) => {
  return (
    <>
      <CommonSection
        closeModal={closeModal}
        title="Investigation"
        placeholder="Investigation"
        data={investigation}
      />
    </>
  );
};

export default Investigation;
