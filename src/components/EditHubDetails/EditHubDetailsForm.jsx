import React from "react";

function EditHubDetailsForm({ hubData, setHubData }) {
  const handleChange = (field, value) => {
    setHubData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const hubFormData = [
    {
      labelName: "Hub Name",
      type: "text",
      value: hubData.hubName,
      field: "hubName",
    },
    {
      labelName: "Hub Location",
      type: "text",
      value: hubData.hubLocation,
      field: "hubLocation",
    },
    {
      labelName: "Hub User Email",
      type: "email",
      value: hubData.hubUserEmail,
      field: "hubUserEmail",
    },
    {
      labelName: "Hub Password",
      type: "password",
      value: hubData.hubPassword,
      field: "hubPassword",
    },
    {
      labelName: "Latitude",
      type: "text",
      value: hubData.latitude,
      field: "latitude",
    },
    {
      labelName: "Longitude",
      type: "text",
      value: hubData.longitude,
      field: "longitude",
    },
  ];

  return (
    <div>
      <h1 className="text-lg lg:text-2xl mt-10 mb-2">Hub Details</h1>
      <div className="flex flex-col lg:flex-row">
        <form>
          {hubFormData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between my-5 items-center lg:mr-40"
            >
              <label className="font-medium text-sm lg:text-base">{data.labelName}</label>
              <input
                type={data.type}
                className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 lg:w-80 w-[45vw] text-sm lg:text-base"
                value={data.value}
                onChange={(e) => handleChange(data.field, e.target.value)}
              />
            </div>
          ))}
        </form>
        <div>
          <form>
            <div className="flex justify-between lg:my-5 items-center">
              <label className="font-medium text-sm lg:text-base">Hub ID</label>
              <input
                type="text"
                className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 lg:w-80 w-[45vw] text-sm lg:text-base text-[#877C7C]"
                value={hubData.hubId}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditHubDetailsForm;
