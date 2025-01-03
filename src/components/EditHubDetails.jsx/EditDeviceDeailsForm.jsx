import React, { useState, useEffect } from "react";

function EditDeviceDetailsForm() {
  const [forms, setForms] = useState([]);

  // Fetch devices when the component mounts
  useEffect(() => {
    const fetchDevices = async () => {
      const devices = [
        {
          id: 1,
          deviceName: "Device 1",
          deviceType: "Washer",
          status: "Maintenance",
          deviceId: "4546546467476",
        },
        {
          id: 2,
          deviceName: "Device 2",
          deviceType: "Dryer",
          status: "Not Working",
          deviceId: "4546546467445",
        },
      ];
      setForms(devices);
    };

    fetchDevices();
  }, []);

  const addDeviceForm = () => {
    const newForm = {
      id: forms.length + 1,
      deviceName: `Device ${forms.length + 1}`,
      deviceType: null,
      status: null,
      deviceId: "",
    };
    setForms([...forms, newForm]);
  };

  // const handleDeviceTypeClick = (id, type) => {
  //   setForms((prevForms) =>
  //     prevForms.map((form) =>
  //       form.id === id ? { ...form, deviceType: type } : form
  //     )
  //   );
  // };

  const handleStatusClick = (id, status) => {
    setForms((prevForms) =>
      prevForms.map((form) => (form.id === id ? { ...form, status } : form))
    );
  };

  return (
    <div id="barlowFont" className="my-5">
      <h1 className="my-5 text-2xl font-medium">Device Details</h1>
      <div>
        {forms.map((data) => (
          <div className="flex" key={data.id}>
            <div className="my-5 mr-10">
              <h1 className="my-3 font-medium">{data.deviceName}</h1>
              <div className="flex items-center">
                <h1 className="font-medium mr-10">Type of Device</h1>
                <button
                  // onClick={() => handleDeviceTypeClick(data.id, "Washer")}
                  className={`px-5 py-1 rounded-xl mx-5 transition duration-300 ${
                    data.deviceType === "Washer"
                      ? "bg-[#69E08B]"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Washer
                </button>
                <button
                  // onClick={() => handleDeviceTypeClick(data.id, "Dryer")}
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
                  className="rounded-lg py-1 px-5"
                  placeholder={data.deviceId ? `#${data.deviceId}` : "Enter ID"}
                />
              </div>
            </div>

            <div className="my-5 mx-5">
              <h1 className="my-3 font-medium">Status</h1>
              <div className="flex items-center">
              <button
                  onClick={() => handleStatusClick(data.id, "Good")}
                  className={`px-5 py-1 rounded-xl mr-3 transition duration-300 ${
                    data.status === "Good"
                      ? "bg-[#69E08B]"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Good
                </button>
                <button
                  onClick={() => handleStatusClick(data.id, "Maintenance")}
                  className={`px-5 py-1 rounded-xl mx-3 transition duration-300 ${
                    data.status === "Maintenance"
                      ? "bg-[#E54040]"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Maintenance
                </button>
                <button
                  onClick={() => handleStatusClick(data.id, "Not Working")}
                  className={`px-5 py-1 rounded-xl mx-3 transition duration-300 ${
                    data.status === "Not Working"
                      ? "bg-[#E54040]"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Not Working
                </button>
              </div>
            </div>
          </div>
        ))}
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
