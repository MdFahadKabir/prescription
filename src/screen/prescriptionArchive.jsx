import React from "react";
import MainLayout from "../layout/MainLayout";
import ArchiveSidebar from "../components/prescriptionArchive/ArchiveSidebar";
import Archive from "../components/prescriptionArchive/Archive";
import ArchiveOffer1 from "../components/prescriptionArchive/ArchiveOffer1";
import ArchiveOffer2 from "../components/prescriptionArchive/ArchiveOffer2";
import ArchiveOffer3 from "../components/prescriptionArchive/ArchiveOffer3";

const PrescriptionArchive = () => {
  return (
    <>
      <MainLayout title="Prescription Archive">
        <div className="flex justify-between border-t border-[#21242726]/15 h-screen bg-white">
          <div className="w-2/12 mx-5 mt-5 ">
            <ArchiveSidebar />
          </div>
          <div className="w-8/12 mx-5 mt-5 ">
            <Archive />
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

export default PrescriptionArchive;
