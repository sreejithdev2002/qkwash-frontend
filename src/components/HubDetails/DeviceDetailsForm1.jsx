// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// function DeviceDetailsForm1() {
//   const [forms, setForms] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDevices = async () => {
//       const existingDevices = [
//         {
//           id: 1,
//           deviceName: "Device 1",
//           deviceType: "Washer",
//           status: "Good",
//           deviceId: "4546546467476",
//         },
//         {
//           id: 2,
//           deviceName: "Device 2",
//           deviceType: "Dryer",
//           status: "Not Working",
//           deviceId: "4546546467445",
//         },
//       ];
//       setTimeout(() => setForms(existingDevices), 500);
//     };

//     fetchDevices();
//   }, []);

//     // const handleDeviceTypeClick = (id, type) => {
//     //   setForms((prevForms) =>
//     //     prevForms.map((form) =>
//     //       form.id === id ? { ...form, deviceType: type } : form
//     //     )
//     //   );
//     // };

//     // const handleStatusClick = (id, status) => {
//     //   setForms((prevForms) =>
//     //     prevForms.map((form) => (form.id === id ? { ...form, status } : form))
//     //   );
//     // };

//   const handleClick = () => {
//     navigate("/hublist/device-details")
//   }

//   return (
//     <div id="barlowFont" className="my-5">
//       <h1 className="my-5 text-2xl font-medium">Device Details</h1>
//       <div>
//         {forms.map((data) => (
//           <div className="flex" key={data.id}>
//             <div className="my-5 mr-10">
//               <h1 className="my-3 font-medium">{data.deviceName}</h1>
//               <div className="flex items-center">
//                 <h1 className="font-medium mr-10">Type of Device</h1>
//                 <button
//                   // onClick={() => handleDeviceTypeClick(data.id, "Washer")}
//                   className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
//                     data.deviceType === "Washer"
//                       ? "bg-[#69E08B]"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   Washer
//                 </button>
//                 <button
//                   // onClick={() => handleDeviceTypeClick(data.id, "Dryer")}
//                   className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
//                     data.deviceType === "Dryer"
//                       ? "bg-[#69E08B]"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   Dryer
//                 </button>
//               </div>
//               <div className="flex my-5">
//                 <h1 className="font-medium mr-24">Device ID</h1>
//                 <input
//                   type="text"
//                   className="rounded-lg py-1 px-5 text-[#695959]"
//                   value={`#${data.deviceId}`}
//                   readOnly
//                 />
//               </div>
//             </div>

//             <div className="my-5 mx-5">
//               <h1 className="my-3 font-medium">Status</h1>
//               <div className="flex items-center">
//               <button
//                   // onClick={() => handleStatusClick(data.id, "Maintenance")}
//                   className={`px-5 py-1 rounded-xl mr-3 transition duration-300 ${
//                     data.status === "Good"
//                       ? "bg-[#69E08B]"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   Good
//                 </button>
//                 <button
//                   // onClick={() => handleStatusClick(data.id, "Maintenance")}
//                   className={`px-5 py-1 rounded-xl mx-3 transition duration-300 ${
//                     data.status === "Maintenance"
//                       ? "bg-[#E54040]"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   Maintenance
//                 </button>
//                 <button
//                   // onClick={() => handleStatusClick(data.id, "Not Working")}
//                   className={`px-5 py-1 rounded-xl mx-3 transition duration-300 ${
//                     data.status === "Not Working"
//                       ? "bg-[#E54040]"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   Not Working
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-center items-center ml-10">
//               <button className="bg-[#69E08B] font-medium px-5 py-2 rounded-lg" onClick={handleClick}>
//                 CLICK
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DeviceDetailsForm1;

function DeviceDetailsForm1({ devices }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/hublist/${id}`);
  };
  return (
    <div id="barlowFont" className="my-5">
      <h1 className="my-5 text-2xl font-medium">Device Details</h1>
      <div>
        {devices.map((data) => (
          <div className="flex" key={data.id}>
            <div className="my-5 mr-10">
              <h1 className="my-3 font-medium">{data.deviceName}</h1>
              <div className="flex items-center">
                <h1 className="font-medium mr-10">Type of Device</h1>
                <span className="px-5 py-1 rounded-xl mx-5 transition duration-300 bg-[#69E08B]">
                  {data.deviceType}
                </span>
              </div>
              <div className="flex my-5">
                <h1 className="font-medium mr-24">Device ID</h1>
                <input
                  type="text"
                  className="rounded-lg py-1 px-5 text-[#695959]"
                  value={`#${data.deviceId}`}
                  readOnly
                />
              </div>
            </div>
            <div className="my-5 mx-5">
              <h1 className="my-3 font-medium">Status</h1>
              <span
                className={`px-5 py-1 rounded-xl transition duration-300 ${
                  data.status === "Good" ? "bg-[#69E08B]" : "bg-[#E54040]"
                }`}
              >
                {data.status}
              </span>
            </div>
            <div className="flex justify-center items-center ml-10">
              <button
                className="bg-[#69E08B] font-medium px-5 py-2 rounded-lg ml-20"
                onClick={() => {
                  navigate(`/hublist/device-details/${data.deviceId}`)
                }}
              >
                CLICK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceDetailsForm1;
