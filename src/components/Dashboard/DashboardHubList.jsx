import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardHubList() {
  const [hubList, setHubList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    fetchData();
  }, []);

  return (
    <div className="bg-[#DCE7DDBD] rounded-2xl px-5 lg:px-10 py-5 mt-2" id="barlowFont">
      <h1 className="font-semibold text-xl lg:text-2xl text-[#464255] pb-5">Hub List</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="h-[40vh] lg:h-[35vh] overflow-auto pr-5" id="scrollbar">
          {hubList.length > 0 ? (
            hubList.map((data) => (
              <div
                key={data.hubid}
                onClick={() => {
                  navigate(`/hublist/${data.hubid}`);
                }}
                className="bg-[#CEDCEC] rounded-xl px-5 py-2 my-2 scroll-smooth"
              >
                <h1 className="font-medium text-[#464255] text-xl lg:text-2xl">
                  {data.hubname}
                </h1>
                <h2 className="font-medium text-[#A3A3A3] text-sm lg:text-xl">
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
