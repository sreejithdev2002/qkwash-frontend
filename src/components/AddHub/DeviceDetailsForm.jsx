import React, { useState } from "react";

function DeviceDetailsForm() {
  const [forms, setForms] = useState([]);

  const addDeviceForm = () => {
    const newForm = {
      id: forms.length + 1,
      deviceName: `Device ${forms.length + 1}`,
      selectedOption: null,
    };
    setForms([...forms, newForm]);
  };

  const handleOptionClick = (id, option) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, selectedOption: option } : form
      )
    );
  };

  return (
    <div id="barlowFont" className="p-5">
      <h1 className="text-2xl my-2">Device Details</h1>
      <div>
        {forms.map((data) => (
          <div key={data.id} className="my-5">
            <h1 className="my-3 font-medium">{data.deviceName}</h1>
            <div className="flex items-center">
              <h1 className="font-medium mr-10">Type of Device</h1>
              <button
                onClick={() => handleOptionClick(data.id, "Washer")}
                className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
                  data.selectedOption === "Washer"
                    ? "bg-[#69E08B]"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Washer
              </button>
              <button
                onClick={() => handleOptionClick(data.id, "Dryer")}
                className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
                  data.selectedOption === "Dryer"
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
                className="rounded-lg py-1 px-5"
                placeholder="#4546546467476"
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
