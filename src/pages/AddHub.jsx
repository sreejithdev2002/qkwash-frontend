import React, { useState } from "react";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Sidebar";
import AddHubComponent from "../components/AddHub/AddHubComponent";
import HubDetailsForm from "../components/AddHub/HubDetailsForm";
import DeviceDetailsForm from "../components/AddHub/DeviceDetailsForm";
import PriceDetailsForm from "../components/AddHub/PriceDetailsForm";
import axios from "axios";
import { toast } from "react-toastify";

function AddHub() {
  let data = "hidden";
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const [hubDetails, setHubDetails] = useState({
    ownerEmail: "",
    ownerPassword: "",
    hubName: "",
    latitude: "",
    longitude: "",
  });

  const [deviceForms, setDeviceForms] = useState([]);
  const [priceDetails, setPriceDetails] = useState({});

  const handleSubmit = async () => {
    const mastermobile = sessionStorage.getItem("mastermobile");
    const sessionToken = sessionStorage.getItem("sessionToken");

    const transformedDevices = deviceForms.map((device) => {
      const { deviceid, deviceType } = device;

      const relevantPrices = {
        actual_quick_amount: Number(priceDetails.quick?.actual) || 0,
        offer_quick_amount: Number(priceDetails.quick?.offer) || 0,
        actual_steam_amount: Number(priceDetails.steam?.actual) || 0,
        offer_steam_amount: Number(priceDetails.steam?.offer) || 0,
        actual_deterg_plus_amount: Number(priceDetails.detergent?.actual) || 0,
        offer_deterg_plus_amount: Number(priceDetails.detergent?.offer) || 0,
        actual_other_three_amount: Number(priceDetails.otherThree?.actual) || 0,
        offer_other_three_amount: Number(priceDetails.otherThree?.offer) || 0,
        actual_stiff_ultra_amount: Number(priceDetails.stiffUltra?.actual) || 0,
        offer_stiff_ultra_amount: Number(priceDetails.stiffUltra?.offer) || 0,
      };

      return {
        deviceid,
        devicetype: deviceType,
        ...relevantPrices,
      };
    });

    const payload = {
      mastermobile: mastermobile,
      sessionToken: sessionToken,
      ownerEmail: hubDetails.ownerEmail,
      ownerPassword: hubDetails.ownerPassword,
      hubName: hubDetails.hubName,
      latitude: Number(hubDetails.latitude),
      longitude: Number(hubDetails.longitude),
      devices: transformedDevices,
    };

    console.log("Payload:", payload);

    try {
      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/AddNewHub`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log(
          "Data submitted successfully!",
          response.statusText,
          response.data
        );
        toast.success("Data added successfully");
      } else {
        console.error(
          "Failed to submit data:",
          response.statusText,
          response.data
        );
        toast.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 overflow-auto">
        <Header hide={data} />
        <AddHubComponent />

        <HubDetailsForm hubDetails={hubDetails} setHubDetails={setHubDetails} />
        <DeviceDetailsForm
          deviceForms={deviceForms}
          setDeviceForms={setDeviceForms}
        />
        <PriceDetailsForm
          priceDetails={priceDetails}
          setPriceDetails={setPriceDetails}
        />

        <div className="flex justify-center mb-10 my-5">
          <button
            className="bg-[#7AEC50] px-10 py-2 rounded-lg font-medium shadow hover:bg-[#75e44c]"
            id="barlowFont"
            onClick={handleSubmit}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHub;
