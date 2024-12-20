import axios from "axios";
import React, { useEffect, useState } from "react";

function DashboardHubList() {
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
        console.log(response.data.data);
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while fetching the data.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(); // Fetches data once on mount
  }, []); // Empty array to avoid infinite loop

  return (
    <div className="bg-[#DCE7DDBD] rounded-2xl px-10 py-5 mt-2" id="barlowFont">
      <h1 className="font-semibold text-2xl text-[#464255] pb-5">Hub List</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="h-[35vh] overflow-auto pr-5" id="scrollbar">
          {hubList.length > 0 ? (
            hubList.map((data) => (
              <div
                key={data.hubid}
                className="bg-[#CEDCEC] rounded-xl px-5 py-2 my-2 scroll-smooth"
              >
                <h1 className="font-medium text-[#464255] text-2xl">
                  {data.hubname}
                </h1>
                <h2 className="font-medium text-[#A3A3A3] text-xl">
                  #{data.hubid}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hubs available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardHubList;
