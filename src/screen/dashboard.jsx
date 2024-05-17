import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import SideCard from "../components/dashboard/sideCard";
import TopCard from "../components/dashboard/topCard";
import AppointmentList from "../components/dashboard/appointmentList";
import AttendedCard from "../components/dashboard/attendedCard";
import PrescriptionChart from "../components/dashboard/PrescriptionChart";
import OfferFrist from "../components/dashboard/offerFirst";
import OfferSecond from "../components/dashboard/offerSecond";

const Dashboard = () => {
  // State to hold active tab data
  const [activeTabData, setActiveTabData] = useState(null);

  return (
    <MainLayout title="Dashboard">
      <div className="container mx-auto max-w-full">
        <div className="flex flex-row">
          {/* Side Navigation */}
          <div className="w-1/5">
            <SideCard setActiveTabData={setActiveTabData} />
          </div>

          {/* Main Content */}
          <div className="w-4/5 max-w-full px-5">
            {/* <TopCard /> */}
            {/* <AppointmentList /> */}

            {/* Display active tab data */}
            {activeTabData && (
              <div className="mt-2">
                <AttendedCard activeTabData={activeTabData} />
              </div>
            )}
            <div className="mt-5">
              <div className="flex justify-between">
                <div className="w-full">
                  {activeTabData && (
                    <div>
                      <PrescriptionChart activeTabData={activeTabData} />
                    </div>
                  )}
                </div>
                <div className="mx-2"></div>
                <div className="w-2/12 ">
                  <div className="">
                    <OfferFrist />
                    <div className="mt-5"></div>
                    <OfferSecond />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
