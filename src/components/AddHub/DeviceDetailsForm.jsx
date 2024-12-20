import React from "react";

function DeviceDetailsForm({ deviceForms, setDeviceForms }) {
  const addDeviceForm = () => {
    const newForm = {
      deviceid: "",
      deviceType: null,
    };
    setDeviceForms([...deviceForms, newForm]);
  };

  const handleOptionClick = (index, option) => {
    setDeviceForms((prevForms) =>
      prevForms.map((form, idx) =>
        idx === index ? { ...form, deviceType: option } : form
      )
    );
  };

  const handleInputChange = (index, value) => {
    setDeviceForms((prevForms) =>
      prevForms.map((form, idx) =>
        idx === index ? { ...form, deviceid: value } : form
      )
    );
  };

  return (
    <div id="barlowFont" className="p-5">
      <h1 className="text-2xl my-2">Device Details</h1>
      <div>
        {deviceForms.map((data, index) => (
          <div key={index} className="my-5">
            <div className="flex items-center">
              <h1 className="font-medium mr-10">Type of Device</h1>
              <button
                onClick={() => handleOptionClick(index, "Washer")}
                required
                className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
                  data.deviceType === "Washer"
                    ? "bg-[#69E08B]"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Washer
              </button>
              <button
                onClick={() => handleOptionClick(index, "Dryer")}
                required
                className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
                  data.deviceType === "Dryer"
                    ? "bg-[#69E08B]"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Dryer
              </button>
            </div>
            <div className="flex my-5">
              <h1 className="font-medium mr-24">Device ID</h1>
              <input
                type="text"
                value={data.deviceid}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="rounded-lg py-1 px-5"
                placeholder="Enter Device ID"
                required
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-white px-4 py-1 rounded-md font-medium my-5"
        onClick={addDeviceForm}
      >
        + Add Device
      </button>
    </div>
  );
}

export default DeviceDetailsForm;
