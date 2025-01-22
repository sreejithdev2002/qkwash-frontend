import axios from "axios";
import React, { useEffect, useState } from "react";

function History({ hubid }) {
  const [history, setHistory] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/hubhistory`,
        {
          mastermobile,
          sessionToken,
          hubid,
        }
      );

      if (response.status === 200) {
        setHistory(response.data.historyRecords);
        console.log("History fetched successfully");
      } else {
        console.log("Failed to fetch history");
      }
    } catch (error) {
      console.log("Internal server error : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [hubid]);

  return (
    <div className="overflow-auto h-[60vh]">
      <table id="montserratFont" className="w-[75vw] mt-5">
        <thead className="sticky top-0 z-10 bg-[#89F3FF]">
          <tr>
            <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
              DATE
            </th>
            <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
              USER MOBILE
            </th>
            <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
              DEVICE ID
            </th>
            <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
              CYCLES
            </th>
            <th className=" border-black px-5 lg:px-10 py-2 lg:py-5 pb-4 lg:pb-8 font-medium text-sm lg:text-2xl">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {history.map((data) => (
            <tr className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200">
              <td className="p-3 lg:p-5 font-medium text-sm lg:text-lg">
                {new Date(data.device_booked_user_end_time).toLocaleDateString(
                  "en-GB"
                )}
              </td>
              <td className="p-3 lg:p-5 font-medium text-sm lg:text-lg">
                {data.device_booked_user_mobile_no}
              </td>
              <td className="p-3 lg:p-5 font-medium text-sm lg:text-lg">{data.deviceId}</td>
              <td className="p-3 lg:p-5 font-medium text-sm lg:text-lg">
                {data.booked_user_selected_wash_mode}
              </td>
              <td className="p-3 lg:p-5 font-medium text-sm lg:text-lg">
                {data.booked_user_amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
