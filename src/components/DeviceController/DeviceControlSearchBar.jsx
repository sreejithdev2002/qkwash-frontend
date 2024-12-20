import React from "react";

function DeviceControlSearchBar() {
  return (
    <div className="flex items-center">
      <input type="text" className="rounded-3xl py-2 px-4 w-[88%] text-xl mr-1" placeholder="Device ID..." />
      <button className="rounded-3xl py-2 px-4 bg-[#7AEC50] text-lg font-medium my-1">Search Here</button>
    </div>
  );
}

export default DeviceControlSearchBar;
