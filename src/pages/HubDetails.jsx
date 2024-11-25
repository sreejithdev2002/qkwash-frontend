import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Dashboard/Header";
import HubDetailsHeader from "../components/HubDetails/HubDetailsHeader";
import HubDetailsForm1 from "../components/HubDetails/HubDetailsForm1";
import DeviceDetailsForm1 from "../components/HubDetails/DeviceDetailsForm1";
import PriceDetailsForm1 from "../components/HubDetails/PriceDetailsForm1";
import DashboardComponent1 from "../components/Dashboard/DashboardComponent1";
import History from "../components/HubDetails/History";

function HubDetails() {
  let data = "hidden";
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-[100vh] px-5 pt-5 overflow-auto">
        <Header hide={data} />
        <HubDetailsHeader />
        <HubDetailsForm1 />
        <DeviceDetailsForm1 />
        <PriceDetailsForm1 />
        <h1 className="text-2xl font-medium my-2" id="barlowFont">Earnings</h1>
        <DashboardComponent1 />
        <History/>
      </div>
    </div>
  );
}

export default HubDetails;
