import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Dashboard/Header";
import HubDetailsHeader from "../components/HubDetails/HubDetailsHeader";
import HubDetailsForm1 from "../components/HubDetails/HubDetailsForm1";
import DeviceDetailsForm1 from "../components/HubDetails/DeviceDetailsForm1";
import PriceDetailsForm1 from "../components/HubDetails/PriceDetailsForm1";
import EarningsComponent from "../components/HubDetails/EarningsComponent";
import History from "../components/HubDetails/History";
import { useParams } from "react-router-dom";
import axios from "axios";

function HubDetails() {
  const [hubData, setHubData] = useState(null);
  const [deviceData, setDeviceData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hubId } = useParams();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");
  
      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/specifichubdetails`,
        {
          mastermobile,
          sessionToken,
          hubId,
        }
      );
  
      const data = response.data;
  
      setHubData({
        hubName: data.hubName,
        hubLocation: "Custom Location",
        hubUserEmail: data.ownerEmail,
        hubPassword: "Default Password",
        latitude: data.latitude,
        longitude: data.longitude,
        hubId: hubId,
      });
  
      setDeviceData(data.devices.map((device) => ({
        id: device.deviceid,
        deviceName: device.devicetype,
        deviceType: device.devicetype,
        status: device.devicestatus,
        condition: device.devicecondition,
        deviceId: device.deviceid,
      })));
  
      const prices = [
        {
          name: "QK Wash",
          actualPrice: data.devices[0]?.actual_quick_amount || 0,
          offerPrice: data.devices[0]?.offer_quick_amount || 0,
        },
        {
          name: "Heavy Wash",
          actualPrice: data.devices[0]?.actual_steam_amount || 0,
          offerPrice: data.devices[0]?.offer_steam_amount || 0,
        },
        {
          name: "QK Dryer",
          actualPrice: data.devices[0]?.actual_other_three_amount || 0,
          offerPrice: data.devices[0]?.offer_other_three_amount || 0,
        },
        {
          name: "Heavy Dryer",
          actualPrice: data.devices[0]?.actual_stiff_ultra_amount || 0,
          offerPrice: data.devices[0]?.offer_stiff_ultra_amount || 0,
        },
        {
          name: "Detergent",
          actualPrice: data.devices[0]?.actual_deterg_plus_amount || 0,
          offerPrice: data.devices[0]?.offer_deterg_plus_amount || 0,
        },
      ];

      setPriceData(prices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hub details:", error);
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  }, [hubId]);

  if (loading) {
    return <>
    <Sidebar/>
    </>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-[100vh] px-5 pt-5 overflow-auto">
        <Header hide={"hidden"} />
        <HubDetailsHeader hubId={hubId}/>
        <HubDetailsForm1 hubData={hubData} />
        <DeviceDetailsForm1 devices={deviceData} />
        <PriceDetailsForm1 prices={priceData} />
        <h1 className="text-2xl font-medium my-2" id="barlowFont">
          Earnings
        </h1>
        <EarningsComponent hubid={hubId}/>
        <History hubid={hubId} />
      </div>
    </div>
  );
}

export default HubDetails;