// import React from "react";
// import JobStatusCard from "./JobStatusCard";

// function DeviceControlDetails() {
//   return (
//     <div className="mt-10">
//       <div className="flex">
//         <div className="mr-20">
//           <h1 className="font-medium">Device 01</h1>
//           <div className="flex justify-between items-center mt-5">
//             <label className="mr-10 font-medium">Type of Device</label>
//             <span type="text" className="py-1 px-10 rounded-md bg-[#69E08B]">
//               Washer
//             </span>
//           </div>
//           <div className="flex justify-between items-center mt-5">
//             <label className="mr-10 font-medium">Hub ID</label>
//             <span type="text" className="py-1 px-10 rounded-md bg-white">
//               #4546546467474
//             </span>
//           </div>
//           <div className="flex justify-between items-center mt-5">
//             <label className="mr-10 font-medium">Device ID</label>
//             <span type="text" className="py-1 px-10 rounded-md bg-white">
//               #4546546467474
//             </span>
//           </div>
//         </div>
//         <div>
//           <h1 className="font-medium">Status</h1>
//           <div className="mt-5 flex">
//             <span type="text" className="py-1 px-10 rounded-md bg-white mr-3">
//               Maintenance
//             </span>
//             <span type="text" className="py-1 px-10 rounded-md bg-white ml-3">
//               Not Working
//             </span>
//           </div>
//           <div className="flex items-center mt-5">
//             <label className="mr-10 font-medium">Hub Name</label>
//             <span type="text" className="py-1 px-10 rounded-md bg-white">
//               Kerala Hostel
//             </span>
//           </div>
//         </div>
//       </div>
//       <JobStatusCard />
//       <div className="mt-10">
//         <h1 className="text-center text-xl font-medium mb-10">Live Monitor</h1>
//         <div className="flex items-center justify-center">
//           <div>
//             <label className="mr-5">Door Status</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">
//               Closed
//             </span>
//           </div>
//           <div>
//             <label className="mr-5">Water Level</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">
//               12%
//             </span>
//           </div>
//           <div>
//             <label className="mr-5">Motor RPM</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">
//               0RPM
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10">
//         <h1 className="text-center text-xl font-medium mb-10">Quick Actions</h1>
//         <div className="flex items-center justify-center">
//           <div>
//             <label className="mr-5">Running Job</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">
//               Stop Job
//             </span>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">
//               Pause Job
//             </span>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">
//               Start Job
//             </span>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">
//               Restart Job
//             </span>
//           </div>
//         </div>
//         <div className="flex items-center justify-center mt-10">
//           <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
//             Apply
//           </button>
//         </div>
//       </div>
//       <div className="mt-10">
//         <h1 className="text-center text-xl font-medium mb-10">
//           Hardware Controls
//         </h1>
//         <div className="flex flex-col items-center justify-center">
//           <div className="mb-5">
//             <label className="mr-5">Drain Pump</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">ON</span>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">OFF</span>
//             <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
//               Apply
//             </button>
//           </div>
//           <div className="mb-5">
//             <label className="mr-6">Inlet Pump</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">ON</span>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">OFF</span>
//             <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
//               Apply
//             </button>
//           </div>
//           <div className="mb-5">
//             <label className="mr-20">Door Controls</label>
//             <span className="rounded-xl bg-[#fff] py-2 px-10 mr-5">
//               Door Open
//             </span>
//             <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeviceControlDetails;


import React, { useState } from "react";
import JobStatusCard from "./JobStatusCard";

function DeviceControlDetails() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [hardwareControl, setHardwareControl] = useState({
    drainPump: null,
    inletPump: null,
    doorControl: null,
  });

  const handleQuickAction = (action) => {
    setSelectedAction(action);
  };

  const handleHardwareControl = (control, value) => {
    setHardwareControl((prev) => ({
      ...prev,
      [control]: value,
    }));
  };

  const isSelected = (action) => selectedAction === action;
  const isHardwareSelected = (control, value) =>
    hardwareControl[control] === value;

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="mr-20">
          <h1 className="font-medium">Device 01</h1>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Type of Device</label>
            <span className="py-1 px-10 rounded-md bg-[#69E08B]">Washer</span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Hub ID</label>
            <span className="py-1 px-10 rounded-md bg-white">#4546546467474</span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Device ID</label>
            <span className="py-1 px-10 rounded-md bg-white">#4546546467474</span>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Status</h1>
          <div className="mt-5 flex">
            <span className="py-1 px-10 rounded-md bg-white mr-3">Maintenance</span>
            <span className="py-1 px-10 rounded-md bg-white ml-3">Not Working</span>
          </div>
          <div className="flex items-center mt-5">
            <label className="mr-10 font-medium">Hub Name</label>
            <span className="py-1 px-10 rounded-md bg-white">Kerala Hostel</span>
          </div>
        </div>
      </div>
      <JobStatusCard />
      <div className="mt-10">
        <h1 className="text-center text-xl font-medium mb-10">Live Monitor</h1>
        <div className="flex items-center justify-center">
          <div>
            <label className="mr-5">Door Status</label>
            <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">Closed</span>
          </div>
          <div>
            <label className="mr-5">Water Level</label>
            <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">12%</span>
          </div>
          <div>
            <label className="mr-5">Motor RPM</label>
            <span className="rounded-xl bg-[#fff] py-2 px-10 mr-14">0RPM</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-xl font-medium mb-10">Quick Actions</h1>
        <div className="flex items-center justify-center">
          <div>
            <label className="mr-5">Running Job</label>
            {["Stop Job", "Pause Job", "Start Job", "Restart Job"].map(
              (action) => (
                <span
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className={`rounded-xl py-2 px-10 mr-5 cursor-pointer ${
                    isSelected(action)
                      ? "bg-[#69E08B] text-white"
                      : "bg-[#fff] text-black"
                  }`}
                >
                  {action}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
            Apply
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-xl font-medium mb-10">
          Hardware Controls
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">
            <label className="mr-5">Drain Pump</label>
            {["ON", "OFF"].map((value) => (
              <span
                key={value}
                onClick={() => handleHardwareControl("drainPump", value)}
                className={`rounded-xl py-2 px-10 mr-5 cursor-pointer ${
                  isHardwareSelected("drainPump", value)
                    ? "bg-[#69E08B]"
                    : "bg-[#fff] text-black"
                }`}
              >
                {value}
              </span>
            ))}
            <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
              Apply
            </button>
          </div>
          <div className="mb-5">
            <label className="mr-6">Inlet Pump</label>
            {["ON", "OFF"].map((value) => (
              <span
                key={value}
                onClick={() => handleHardwareControl("inletPump", value)}
                className={`rounded-xl py-2 px-10 mr-5 cursor-pointer ${
                  isHardwareSelected("inletPump", value)
                    ? "bg-[#69E08B]"
                    : "bg-[#fff] text-black"
                }`}
              >
                {value}
              </span>
            ))}
            <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
              Apply
            </button>
          </div>
          <div className="mb-5">
            <label className="mr-20">Door Controls</label>
            <span
              onClick={() => handleHardwareControl("doorControl", "Door Open")}
              className={`rounded-xl py-2 px-10 mr-5 cursor-pointer ${
                isHardwareSelected("doorControl", "Door Open")
                  ? "bg-[#69E08B]"
                  : "bg-[#fff] text-black"
              }`}
            >
              Door Open
            </span>
            <button className="py-1 px-10 bg-[#7AEC50] rounded-md font-medium">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceControlDetails;
