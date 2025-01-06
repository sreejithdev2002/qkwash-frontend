import React from "react";

function HubDetailsForm1({ hubData }) {
  const hubFormData = [
    { labelName: "Hub Name", type: "text", value: hubData.hubName },
    { labelName: "Hub Location", type: "text", value: hubData.hubLocation },
    { labelName: "Hub User Email", type: "email", value: hubData.hubUserEmail },
    { labelName: "Hub Password", type: "password", value: hubData.hubPassword },
    { labelName: "Latitude", type: "text", value: hubData.latitude },
    { labelName: "Longitude", type: "text", value: hubData.longitude },
  ];

  return (
    <div>
      <div className="flex">
        <form>
          {hubFormData.map((data, index) => (
            <div key={index} className="flex justify-between my-5 items-center mr-40">
              <label className="font-medium">{data.labelName}</label>
              <input
                type={data.type}
                className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 w-80"
                value={data.value}
                readOnly
              />
            </div>
          ))}
        </form>
        <div>
          <form>
            <div className="flex justify-between my-5 items-center">
              <label className="font-medium">Hub ID</label>
              <input
                type="text"
                className="bg-[#FDFDFD] rounded-lg ml-5 py-1 px-5 w-80 text-[#877C7C]"
                value={hubData.hubId}
                readOnly
              />
            </div>
            <h1 className="text-center my-5 font-medium text-lg">QR Details</h1>
            <div className="flex justify-center">
              <button className="py-2 px-5 bg-[#69E08B] rounded-md">Get QR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HubDetailsForm1;