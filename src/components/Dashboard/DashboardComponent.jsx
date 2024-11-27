import React from "react";
import Image1 from "../../Assets/Images/Icon.png";
import Image2 from "../../Assets/Images/Icon1.png";
import Image3 from "../../Assets/Images/Icon2.png";
import Image4 from "../../Assets/Images/Icon3.png";

function DashboardComponent() {
  const deviceData = [
    {
      name: "Working Device",
      number: 75,
      image: Image1,
      style: "mr-4"
    },
    {
      name: "Waiting for job",
      number: 357,
      image: Image2,
      style: "mx-4"
    },
    {
      name: "Service Devices",
      number: 65,
      image: Image3,
      style: "mx-4"
    },
    {
      name: "Total Devices",
      number: 128,
      image: Image4,
      style: "ml-4"
    },
  ];

  return (
    <div>
      <h1 id="barlowFont" className="my-5 font-semibold text-2xl text-[#464255]">Dashboard</h1>
      <div className="flex">
        {deviceData.map((data, index) => (
          <div key={index} className={`flex  justify-center items-center bg-white w-[20vw] h-[15vh] rounded-xl shadow-sm  ${data.style}`}>
            <div>
              <img src={data.image} alt="" width={60} className="mr-5"/>
            </div>
            <div id="barlowFont">
              <h1 className="font-bold text-[#464255] text-4xl">{data.number}</h1>
              <h2 className="text-[#464255] text-sm">{data.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardComponent;
