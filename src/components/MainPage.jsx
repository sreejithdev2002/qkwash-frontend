import React, { useState, useEffect } from "react";
import Header from "./Dashboard/Header";
import DashboardComponent from "./Dashboard/DashboardComponent";
import DashboardComponent1 from "./Dashboard/DashboardComponent1";
import DashboardHubList from "./Dashboard/DashboardHubList";
import axios from "axios";

function MainPage() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const [hubData, setHubData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/topBarValues`,
        {
          mastermobile,
          sessionToken,
        }
      );

      if (response.status === 200) {
        let hubs = {
          workingDevice: response.data.data.workingDevices,
          waitingForJob: response.data.data.waitingForJob,
          serviceDevices: response.data.data.serviceDevices,
          totalDevices: response.data.data.totalDevices,
        };

        let prices = {
          today: response.data.data.todayEarnings,
          week: response.data.data.weekEarnings,
          month: response.data.data.monthEarnings,
        };
        setHubData(hubs);
        setPriceData(prices);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
      <Header />
      <DashboardComponent hubData={hubData} />
      <DashboardComponent1 priceData={priceData} />
      <DashboardHubList />
    </div>
  );
}


export default MainPage;
