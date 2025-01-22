import axios from "axios";
import React, { useEffect, useState } from "react";

function EarningsComponent({ hubid }) {
  const [priceData, setPriceData] = useState({});
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/hubearnings`,
        {
          mastermobile,
          sessionToken,
          hubid,
        }
      );

      if (response.status === 200) {
        setPriceData(response.data.hubDetails);
        console.log("Fetched price details successfully.");
      } else {
        console.log("Failed to fetch price details.");
      }
    } catch (error) {
      console.log("Error fetching price details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [hubid]);

  return (
    <div className="flex">
      <div
        className={`bg-[#ECCECE] w-[40vw] rounded-xl mx-2 lg:mx-5 my-2 lg:my-5 p-2 lg:p-5 shadow-sm`}
        id="barlowFont"
      >
        <h1 className="font-medium text-xs lg:text-base text-[#464255]">Today Earnings</h1>
        <h2 className="text-2xl lg:text-4xl font-medium text-[#464255]">
          {priceData.todayEarnings}
        </h2>
      </div>
      <div
        className={`bg-[#A8C5F1] w-[40vw] rounded-xl mx-2 lg:mx-5 my-2 lg:my-5 p-2 lg:p-5 shadow-sm`}
        id="barlowFont"
      >
        <h1 className="font-medium text-xs lg:text-base text-[#464255]">Last Month Earnings</h1>
        <h2 className="text-2xl lg:text-4xl font-medium text-[#464255]">
          {priceData.lastMonthEarnings}
        </h2>
      </div>
      <div
        className={`bg-[#D77DD4] w-[40vw] rounded-xl mx-2 lg:mx-5 my-2 lg:my-5 p-2 lg:p-5 shadow-sm`}
        id="barlowFont"
      >
        <h1 className="font-medium text-xs lg:text-base text-[#464255]">Total Earnings</h1>
        <h2 className="text-2xl lg:text-4xl font-medium text-[#464255]">
          {priceData.totalEarnings}
        </h2>
      </div>
    </div>
  );
}

export default EarningsComponent;
