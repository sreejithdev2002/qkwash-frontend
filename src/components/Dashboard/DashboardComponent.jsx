import React from "react";
import Image1 from "../../Assets/Images/Icon.png";
import Image2 from "../../Assets/Images/Icon1.png";
import Image3 from "../../Assets/Images/Icon2.png";
import Image4 from "../../Assets/Images/Icon3.png";

function DashboardComponent({hubData}) {
  const deviceData = [
    {
      name: "Working Device",
      number: hubData.workingDevice,
      image: Image1,
      style: "lg:mr-4 mr-1"
    },
    {
      name: "Waiting for job",
      number: hubData.waitingForJob,
      image: Image2,
      style: "lg:mx-4 mx-1"
    },
    {
      name: "Service Devices",
      number: hubData.serviceDevices,
      image: Image3,
      style: "lg:mx-4 mx-1"
    },
    {
      name: "Total Devices",
      number: hubData.totalDevices,
      image: Image4,
      style: "lg:ml-4 ml-1"
    },
  ];

  return (
    <div>
      <h1 id="barlowFont" className="my-5 font-semibold text-2xl text-[#464255]">Dashboard</h1>
      <div className="flex">
        {deviceData.map((data, index) => (
          <div key={index} className={`flex flex-col lg:flex-row  justify-center items-center bg-white w-[30vw] h-[15vh] rounded-xl shadow-sm  ${data.style}`}>
            <div>
              <img src={data.image} alt="" width={60} className="lg:w-16 lg:mr-10 w-10 mx-auto"/>
            </div>
            <div id="barlowFont">
              <h1 className="font-bold text-[#464255] text-2xl lg:text-4xl text-center">{data.number}</h1>
              <h2 className="text-[#464255] text-xs lg:text-sm text-center">{data.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardComponent;
