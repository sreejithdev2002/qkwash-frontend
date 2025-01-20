import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DeviceControlSearchBar from "../components/DeviceController/DeviceControlSearchBar";
import DeviceControlDetails from "../components/DeviceController/DeviceControlDetails";

function DeviceController() {
  const [searchedDeviceId, setSearchedDeviceId] = useState("");

  const handleSearch = (deviceId) => {
    console.log("Device ID from search bar:", deviceId);
    setSearchedDeviceId(deviceId);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 flex flex-col overflow-auto"
        id="barlowFont"
      >
        <h1 className="my-5 font-semibold text-2xl text-[#464255]">
          Device Controls
        </h1>
        <DeviceControlSearchBar onSearch={handleSearch} />
        {searchedDeviceId && (
          <DeviceControlDetails deviceId={searchedDeviceId} />
        )}
      </div>
    </div>
  );
}

export default DeviceController;
