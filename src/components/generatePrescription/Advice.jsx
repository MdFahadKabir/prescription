import React from "react";

import advice from "../../array/advice";
import CommonSection from "../common/CommonSection";
const Advice = ({ closeModal }) => {
  return (
    <>
      <CommonSection
        closeModal={closeModal}
        title="Advice"
        placeholder="Advice"
        data={advice}
      />
    </>
  );
};

export default Advice;
