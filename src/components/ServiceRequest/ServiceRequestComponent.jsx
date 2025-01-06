import axios from "axios";
import React, { useEffect, useState } from "react";

function ServiceRequestComponent() {
  const [tableData, setTableData] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/servicerequest`,
        {
          mastermobile,
          sessionToken,
        }
      );

      if (response.status === 200) {
        setTableData(response.data.data);
        console.log("Fetched service request data successfully");
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.error("Internal server error " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-auto h-[80vh] pr-5" id="scrollbar barlowFont">
      {tableData.map((data) => (
        <div className="font-medium bg-[#D9D9D9] hover:bg-[#d1d1d1] flex justify-between items-center px-10 py-5 my-5 text-center rounded-2xl cursor-pointer transition-all duration-300">
          <div>
            <h1 className="text-2xl text-[#464255] text-start">
              {data.hubname}
            </h1>
            <p className="text-xl text-start text-[#A3A3A3]">#{data.hubid}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>{data.devicetype}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>{data.Serviceid}</p>
            <p>#{data.deviceid}</p>
          </div>
          <div className="flex flex-col text-[#464255] justify-between text-lg">
            <p>
              {new Date(data.service_booked_time).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceRequestComponent;
