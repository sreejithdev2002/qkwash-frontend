import React from "react";
// import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Sidebar";
import ServiceRequestComponent from "../components/ServiceRequest/ServiceRequestComponent";

function ServiceRequest() {
  // let data = "hidden";
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
        {/* <Header hide={data} /> */}
        <h1 className="my-5 font-semibold text-2xl text-[#464255]">Service Request</h1>
        <ServiceRequestComponent/>
      </div>
    </div>
  );
}

export default ServiceRequest;
