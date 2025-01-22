import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsComponent() {
  const { deviceId, hubid } = useParams();

  const [deviceTable, setDeviceTable] = useState([]);
  const [priceData, setPriceData] = useState([]);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchPriceData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/particulardevicedata`,
        {
          mastermobile,
          sessionToken,
          deviceId,
          hubid,
        }
      );

      if (response.status === 200) {
        setPriceData(response.data);
      } else {
        console.log("Failed to fetch price data");
      }
    } catch (error) {
      console.error("Internal Server Error : " + error);
    }
  };

  const fetchTableData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/particulardevicehistorydata`,
        {
          mastermobile,
          sessionToken,
          deviceId,
        }
      );

      if (response.status === 200) {
        setDeviceTable(response.data.historyRecords);
        console.dir(response.data + " heeeeeyyyy");
      } else {
        console.log("Failed to fetch price data");
      }
    } catch (error) {
      console.error("Internal Server Error : " + error);
    }
  };

  useEffect(() => {
    fetchPriceData();
    fetchTableData();
  }, [deviceId]);

  return (
    <div id="barlowFont">
      <div className="flex lg:flex-row flex-col mt-10">
        <div className="mr-20">
          <h1 className="font-medium">Device Details</h1>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium text-sm lg:text-base text-nowrap">
              Type of Device
            </label>
            <span
              type="text"
              className="py-1 px-10 rounded-md bg-[#69E08B] first-letter:uppercase"
            >
              {priceData?.devicetype || "type"}
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium text-sm lg:text-base text-nowrap">
              Hub ID
            </label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #{priceData?.hubid}
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="font-medium text-sm lg:text-base text-nowrap">
              Device ID
            </label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #{deviceId}
            </span>
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <h1 className="font-medium text-sm lg:text-base text-nowrap">
            Status
          </h1>
          <div className="mt-5 flex">
            <span
              type="text"
              className="py-1 px-10 rounded-md bg-[#69E08B] mr-3 first-letter:uppercase"
            >
              {priceData?.devicestatus || "status"}
            </span>
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <h1 className="font-medium text-sm lg:text-base text-nowrap">
            Condition
          </h1>
          <div className="mt-5 flex">
            <span
              type="text"
              className={`py-1 px-10 rounded-md mr-3 first-letter:uppercase ${
                priceData?.devicecondition === "Good"
                  ? "bg-[#69E08B]"
                  : "bg-[#E54040]"
              }`}
            >
              {priceData?.devicecondition || "condition"}
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-center items-center mt-10"
        id="montserratFont"
      >
        <div className="lg:px-28 lg:py-10 w-[100%] h-20 lg:h-36 py-5 bg-[#8ED4DD] rounded-xl lg:mr-5 text-center text-sm lg:text-2xl font-medium text-nowrap mb-2 lg:mb-0">
          <h1>TODAY</h1>
          <p>{priceData?.todayCount || 0}</p>
        </div>
        <div className="lg:px-28 lg:py-10 w-[100%] h-20 lg:h-36 py-5 bg-[#64D577] rounded-xl lg:mr-5 text-center text-sm lg:text-2xl font-medium text-nowrap mb-2 lg:mb-0">
          <h1>LAST WEEK</h1>
          <p>{priceData?.lastWeekCount || 0}</p>
        </div>
        <div className="lg:px-28 lg:py-10 w-[100%] h-20 lg:h-36 py-5 bg-[#8977DA] rounded-xl lg:mr-5 text-center text-sm lg:text-2xl font-medium text-nowrap mb-2 lg:mb-0">
          <h1>LAST MONTH</h1>
          <p>{priceData?.lastMonthCount || 0}</p>
        </div>
      </div>
      <div className="overflow-auto h-[60vh] mt-10" id="scrollbar">
        <table id="montserratFont" className="w-[75vw] mt-5">
          <thead className="sticky top-0 z-10 bg-[#89F3FF]">
            <tr>
              <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
                DATE
              </th>
              <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
                USER MOBILE
              </th>
              <th className="  border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
                DEVICE ID
              </th>
              <th className="  border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
                CYCLES
              </th>
              <th className="  border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {deviceTable.map((data) => (
              <tr className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200">
                <td className="p-3 lg:p-5 font-medium text-sm lg:text-2xltext-lg">
                  {new Date(
                    data.device_booked_user_end_time
                  ).toLocaleDateString("en-GB")}
                </td>
                <td className="p-3 lg:p-5 font-medium text-sm lg:text-2xltext-lg">
                  {data.device_booked_user_mobile_no}
                </td>
                <td className="p-3 lg:p-5 font-medium text-sm lg:text-2xltext-lg">
                  {deviceId}
                </td>
                <td className="p-3 lg:p-5 font-medium text-sm lg:text-2xltext-lg">
                  {data.booked_user_selected_wash_mode}
                </td>
                <td className="p-3 lg:p-5 font-medium text-sm lg:text-2xltext-lg">
                  {data.booked_user_amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsComponent;
