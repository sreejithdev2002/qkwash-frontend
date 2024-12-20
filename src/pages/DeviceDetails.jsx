import React from "react";
import Sidebar from "../components/Sidebar";
import Header from '../components/Dashboard/Header';
import DetailsComponent from "../components/DeviceDetails/DetailsComponent";

function DeviceDetails() {
  let data = "hidden";
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 overflow-auto">
        <Header hide={data} />
        <DetailsComponent/>
      </div>
    </div>
  );
}

export default DeviceDetails;
