import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditDeviceDetailsForm({ initialDevices = [], setDeviceData }) {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    setDevices(initialDevices);
  }, [initialDevices]);

  const addDeviceForm = () => {
    const newDevice = {
      id: `new-${Date.now()}`,
      deviceName: `Device ${devices.length + 1}`,
      deviceType: "",
      deviceCondition: "",
      deviceStatus: "",
      deviceId: "",
    };
    const updatedDevices = [...devices, newDevice];
    setDevices(updatedDevices);
    setDeviceData(updatedDevices);
    console.log(JSON.stringify(updatedDevices) + " updatedDevices");
  };

  const handleInputChange = (id, field, value) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, [field]: value } : device
    );
    setDevices(updatedDevices);
    setDeviceData(updatedDevices);
  };

  const handleConditionSelect = (id, condition) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, deviceCondition: condition } : device
    );
    setDevices(updatedDevices);
    setDeviceData(updatedDevices);
  };

  const handleDeviceTypeSelect = (id, type) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, deviceType: type } : device
    );
    setDevices(updatedDevices);
    setDeviceData(updatedDevices);
  };

  return (
    <div id="barlowFont" className="my-10 lg:my-5">
      <h1 className="my-0 lg:my-5 text-lg lg:text-2xl font-medium">Device Details</h1>
      <div>
        {devices.length === 0 ? (
          <p className="text-gray-500">No devices found.</p>
        ) : (
          devices.map((device) => (
            <div className="flex border-b border-gray-300 py-5 overflow-y-auto" id="scrollbar" key={device.id}>
              <div className="my-5 mr-10">
                <h1 className="my-3 font-medium">{device.deviceName}</h1>
                <div className="flex items-center">
                  <h1 className="font-medium text-sm lg:text-base lg:mr-10 text-nowrap">Type of Device</h1>
                  <button
                    onClick={() => handleDeviceTypeSelect(device.id, "Washer")}
                    className={`px-5 py-1 rounded-xl mx-5 text-sm lg:text-base transition duration-300 ${
                      device.deviceType === "Washer"
                        ? "bg-[#69E08B]"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    Washer
                  </button>
                  <button
                    onClick={() => handleDeviceTypeSelect(device.id, "Dryer")}
                    className={`px-5 py-1 rounded-xl lg:mx-5 text-sm lg:text-base transition duration-300 ${
                      device.deviceType === "Dryer"
                        ? "bg-[#69E08B]"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    Dryer
                  </button>
                </div>
                <div className="flex my-5">
                  <h1 className="font-medium text-sm lg:text-base lg:mr-24 mr-14">Device ID</h1>
                  <input
                    type="text"
                    className="rounded-lg py-1 px-5 w-[40vw] lg:w-[10vw]"
                    placeholder="Enter Device ID"
                    value={device.deviceId}
                    onChange={(e) =>
                      handleInputChange(device.id, "deviceId", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="my-5 mx-2 lg:mx-5">
                <h1 className="my-3 text-sm lg:text-base font-medium">Condition</h1>
                <div className="flex items-center">
                  {["Good", "Maintenance", "Not Working"].map((condition) => (
                    <button
                      key={condition}
                      onClick={() =>
                        handleConditionSelect(device.id, condition)
                      }
                      className={`px-5 py-1 rounded-xl mr-3 text-sm lg:text-base text-nowrap transition duration-300 ${
                        device.deviceCondition === condition
                          ? condition === "Good"
                            ? "bg-[#69E08B]"
                            : "bg-[#E54040]"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center lg:ml-10 ml-5">
                <button
                  className="bg-[#69E08B] font-medium px-5 py-2 rounded-lg"
                  onClick={() =>
                    navigate(`/hublist/device-details/${device.deviceId}`)
                  }
                >
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        className="bg-white px-4 py-2 rounded-md font-medium my-5"
        onClick={addDeviceForm}
      >
        + Add Device
      </button>
    </div>
  );
}

export default EditDeviceDetailsForm;
