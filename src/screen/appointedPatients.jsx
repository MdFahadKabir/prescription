import React from "react";
import MainLayout from "../layout/MainLayout";
import ArchiveOffer1 from "../components/prescriptionArchive/ArchiveOffer1";
import ArchiveOffer2 from "../components/prescriptionArchive/ArchiveOffer2";
import ArchiveOffer3 from "../components/prescriptionArchive/ArchiveOffer3";
import PatientsAppointed from "../components/appointedPatients/PatientsAppointed";
import AppoinmentSidebar from "../components/appointedPatients/AppoinmentSidebar";

const AppointedPatients = () => {
  return (
    <>
      <MainLayout title="Appointed Patients">
        <div className="flex justify-between border-t border-[#21242726]/15 h-screen bg-white">
          <div className="w-2/12 mx-5 mt-5 ">
            <AppoinmentSidebar />
          </div>
          <div className="w-8/12 mx-5 mt-5 ">
            <PatientsAppointed />
          </div>
          <div className="w-2/12 mx-5 mt-5 ">
            <div>
              <ArchiveOffer1 />
              <div className="my-5">
                <ArchiveOffer2 />
              </div>

              <ArchiveOffer3 />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AppointedPatients;
