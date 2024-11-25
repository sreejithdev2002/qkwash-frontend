import React from "react";
import { useNavigate } from "react-router-dom";

function HublistComponent() {
  const hubListData = [
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
    {
      name: "Kerala Hostel Kochi",
      id: "123445",
      washer: 3,
      dryer: 3,
      maintenence: 3,
      serviceRequested: 3,
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hublist/id")
  }
  return (
    <div id="barlowFont">
      <h1 className="my-5 font-semibold text-2xl text-[#464255]">Hub List</h1>
      <div className="overflow-auto h-[80vh] pr-5" id="scrollbar">
        {hubListData.map((data) => (
          <div className="bg-[#D9D9D9] hover:bg-[#d1d1d1] flex justify-between px-10 py-5 my-5 text-center rounded-2xl cursor-pointer transition-all duration-300" onClick={handleClick}>
            <div>
              <h1 className="font-medium text-2xl">{data.name}</h1>
              <p className="text-start">#{data.id}</p>
            </div>
            <div>
              <h1>Washer</h1>
              <p>{data.washer}</p>
            </div>
            <div>
              <h1>Dryer</h1>
              <p>{data.dryer}</p>
            </div>
            <div>
              <h1>Maintenence</h1>
              <p>{data.maintenence}</p>
            </div>
            <div>
              <h1>Service Requested</h1>
              <p>{data.serviceRequested}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HublistComponent;
