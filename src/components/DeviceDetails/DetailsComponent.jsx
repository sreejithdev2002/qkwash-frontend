import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsComponent() {
  const { deviceId } = useParams();

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
      <div className="flex mt-10">
        <div className="mr-20">
          <h1 className="font-medium">Device 01</h1>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Type of Device</label>
            <span type="text" className="py-1 px-10 rounded-md bg-[#69E08B]">
              {priceData.devicetype}
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Hub ID</label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #{priceData.hubid}
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="font-medium">Device ID</label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #{deviceId}
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Status</h1>
          <div className="mt-5 flex">
            <span
              type="text"
              className="py-1 px-10 rounded-md bg-[#69E08B] mr-3"
            >
              {priceData.devicestatus?.charAt(0).toUpperCase() +
                priceData.devicestatus?.slice(1).toLowerCase()}
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Condition</h1>
          <div className="mt-5 flex">
            <span
              type="text"
              className={`py-1 px-10 rounded-md mr-3 ${
                priceData.devicecondition === "Good"
                  ? "bg-[#69E08B]"
                  : "bg-[#E54040]"
              }`}
            >
              {priceData.devicecondition}
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-10"
        id="montserratFont"
      >
        <div className="px-28 py-10 bg-[#8ED4DD] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>TODAY</h1>
          <p>{priceData.todayCount || 0}</p>
        </div>
        <div className="px-28 py-10 bg-[#64D577] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>LAST WEEK</h1>
          <p>{priceData.lastWeekCount || 0}</p>
        </div>
        <div className="px-28 py-10 bg-[#8977DA] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>LAST MONTH</h1>
          <p>{priceData.lastMonthCount || 0}</p>
        </div>
      </div>
      <div className="overflow-auto h-[60vh] mt-10">
        <table id="montserratFont" className="w-[75vw] mt-5">
          <thead className="sticky top-0 z-10 bg-[#89F3FF]">
            <tr>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                DATE
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                USER MOBILE
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                DEVICE ID
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                CYCLES
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {deviceTable.map((data) => (
              <tr className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200">
                <td className="p-5 font-medium text-lg">
                  {new Date(
                    data.device_booked_user_end_time
                  ).toLocaleDateString("en-GB")}
                </td>
                <td className="p-5 font-medium text-lg">
                  {data.device_booked_user_mobile_no}
                </td>
                <td className="p-5 font-medium text-lg">{deviceId}</td>
                <td className="p-5 font-medium text-lg">
                  {data.booked_user_selected_wash_mode}
                </td>
                <td className="p-5 font-medium text-lg">
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
