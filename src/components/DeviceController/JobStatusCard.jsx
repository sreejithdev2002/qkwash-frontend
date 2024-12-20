import React from "react";

const JobStatusCard = () => {
  return (
    <div className="mt-10 bg-white rounded-lg p-4 shadow w-full">
      <h3 className="text-lg font-semibold">Running Job Status</h3>
      <p className="mt-3 font-medium">Heavy wash</p>
      <span className="text-blue-500 text-sm">Running (48% completed)</span>
      <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
          style={{ width: "48%" }}
        ></div>
      </div>
      <div className="flex justify-between text-sm mt-2 text-gray-500">
        <div>
          <h1 className="font-medium text-black">Start Time</h1>
          <span>10:20</span>
        </div>
        <div>
          <h1 className="font-medium text-black">End Time</h1>
          <span>10:50</span>
        </div>
      </div>
    </div>
  );
};

export default JobStatusCard;
