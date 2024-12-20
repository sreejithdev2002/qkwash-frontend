import React from "react";

function ServiceRequestComponent() {
    const ServiceList = [
        {
            hubid: 123445,
            hubname: "Kerala Hostel Kochi",
            device: "Washer",
            date: "12/03/2024 10:20 am",
            num1: "001",
            num2: "12343",
        }
    ]
  return (
    <div className="overflow-auto h-[80vh] pr-5" id="scrollbar barlowFont">
      {ServiceList.map((data) => (
        <div
          className="font-medium bg-[#D9D9D9] hover:bg-[#d1d1d1] flex justify-between items-center px-10 py-5 my-5 text-center rounded-2xl cursor-pointer transition-all duration-300"
        >
          <div>
            <h1 className="text-2xl text-[#464255] text-start">
              {data.hubname}
            </h1>
            <p className="text-xl text-start text-[#A3A3A3]">#{data.hubid}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>{data.device}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>{data.num1}</p>
            <p>#{data.num2}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceRequestComponent;
