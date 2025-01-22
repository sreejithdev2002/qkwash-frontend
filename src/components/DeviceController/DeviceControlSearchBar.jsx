import React, { useState } from "react";

function DeviceControlSearchBar({ onSearch }) {
  const [localDeviceId, setLocalDeviceId] = useState("");

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="rounded-xl lg:rounded-3xl py-1 lg:py-2 px-4 w-44 lg:w-[88%] lg:text-xl mr-1"
        placeholder="Device ID..."
        value={localDeviceId}
        onChange={(e) => setLocalDeviceId(e.target.value)}
      />
      <button
        className="rounded-xl lg:rounded-3xl py-2 px-4 bg-[#7AEC50] text-sm lg:text-lg font-medium my-1"
        onClick={() => onSearch(localDeviceId)}
      >
        Search Here
      </button>
    </div>
  );
}

export default DeviceControlSearchBar;
