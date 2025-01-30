import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HublistComponent() {
  const [hubList, setHubList] = useState([]);
  const [error, setError] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/hublistpage`,
        {
          mastermobile,
          sessionToken,
        }
      );
      if (response.status === 200) {
        setHubList(response.data.data);
      } else {
        setError("Failed to fetch data. Please try again.", error);
      }
    } catch (err) {
      setError("An error occurred while fetching the data.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const navigate = useNavigate();

  return (
    <div id="barlowFont">
      <h1 className="mt-3 mb-2 lg:my-5 font-semibold text-xl lg:text-2xl text-[#464255]">Hub List</h1>
      <div className="overflow-auto h-[80vh] pr-5" id="scrollbar">
        {hubList.map((data) => (
          <div
          key={data.hubid}
            className="font-medium bg-[#D9D9D9] hover:bg-[#d1d1d1] flex justify-between px-2 lg:px-10 py-2 lg:py-5 my-2 lg:my-5 text-center rounded-lg lg:rounded-2xl cursor-pointer transition-all duration-300"
            onClick={() => navigate(`/hublist/${data.hubid}`)}
          >
            <div>
              <h1 className="text-[10px] lg:text-2xl text-[#464255] text-start max-w-[180px] truncate">
                {data.hubname}
              </h1>
              <p className="text-[8px] lg:text-xl text-start text-[#A3A3A3]">#{data.hubid}</p>
            </div>
            <div className="flex flex-col justify-between text-[8px] lg:text-lg">
              <h1>Washer</h1>
              <p>{data.washerCount}</p>
            </div>
            <div className="flex flex-col justify-between text-[8px] lg:text-lg">
              <h1>Dryer</h1>
              <p>{data.dryerCount}</p>
            </div>
            <div className="flex flex-col justify-between text-[8px] lg:text-lg">
              <h1>Maintenence</h1>
              <p>{data.maintenanceCount}</p>
            </div>
            <div className="flex flex-col justify-between text-[8px] lg:text-lg">
              <h1>Service Requested</h1>
              <p>{data.serviceRequestedCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HublistComponent;
