import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Header from "../components/Dashboard/Header";
import EditHubDetailsForm from "../components/EditHubDetails/EditHubDetailsForm";
import EditDeviceDeailsForm from "../components/EditHubDetails/EditDeviceDeailsForm";
import { useParams } from "react-router-dom";
import EditPriceDetails from "../components/EditHubDetails/EditPriceDetails";

function EditHubDetails() {
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
      console.log(data.devices[0].deviceid + " data!!!");

      setHubData({
        hubName: data.hubName,
        hubLocation: "Custom Location",
        hubUserEmail: data.ownerEmail,
        hubPassword: "Default Password",
        latitude: data.latitude,
        longitude: data.longitude,
        hubId: hubId,
      });

      setDeviceData(
        data.devices.map((device) => ({
          id: device.deviceid,
          deviceType: device.devicetype,
          deviceStatus: device.devicestatus,
          deviceCondition: device.devicecondition,
          deviceId: device.deviceid,
        }))
      );

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

  const handleSave = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const payload = {
        mastermobile,
        sessionToken,
        hubId,
        hubName: hubData.hubName,
        latitude: hubData.latitude,
        longitude: hubData.longitude,
        ownerId: hubData.ownerId,
        ownerEmail: hubData.hubUserEmail,
        devices: deviceData.map((device) => ({
          deviceid: device.deviceId,
          devicetype: device.deviceType,
          devicecondition: device.deviceCondition,
          devicestatus: device.deviceStatus || "Ready",
          actual_quick_amount:
            priceData.find((p) => p.name === "QK Wash")?.actualPrice || 0,
          offer_quick_amount:
            priceData.find((p) => p.name === "QK Wash")?.offerPrice || 0,
          actual_steam_amount:
            priceData.find((p) => p.name === "Heavy Wash")?.actualPrice || 0,
          offer_steam_amount:
            priceData.find((p) => p.name === "Heavy Wash")?.offerPrice || 0,
          actual_other_three_amount:
            priceData.find((p) => p.name === "QK Dryer")?.actualPrice || 0,
          offer_other_three_amount:
            priceData.find((p) => p.name === "QK Dryer")?.offerPrice || 0,
          actual_stiff_ultra_amount:
            priceData.find((p) => p.name === "Heavy Dryer")?.actualPrice || 0,
          offer_stiff_ultra_amount:
            priceData.find((p) => p.name === "Heavy Dryer")?.offerPrice || 0,
          actual_deterg_plus_amount:
            priceData.find((p) => p.name === "Detergent")?.actualPrice || 0,
          offer_deterg_plus_amount:
            priceData.find((p) => p.name === "Detergent")?.offerPrice || 0,
        })),
      };

      console.log("Payload to be sent:", payload);

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/updateHub`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Hub details updated successfully!");
        fetchData();
      } else {
        toast.error("Failed to update hub details.");
      }
    } catch (error) {
      console.error("Error updating hub details:", error);
      toast.error("Error updating hub details.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [hubId]);

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="w-[80vw] h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 overflow-auto">
        <Header hide={"hidden"} />
        <h1 id="barlowFont" className="text-2xl font-medium my-5">
          Edit Hub Details
        </h1>
        <EditHubDetailsForm hubData={hubData} setHubData={setHubData} />
        <EditDeviceDeailsForm
          initialDevices={deviceData}
          setDeviceData={setDeviceData}
        />
        <EditPriceDetails prices={priceData} setPriceData={setPriceData} />
        <div id="barlowFont" className="flex justify-center mt-5 mb-10">
          <button
            className="px-5 py-1 bg-[#7AEC50] rounded-md font-medium"
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditHubDetails;
