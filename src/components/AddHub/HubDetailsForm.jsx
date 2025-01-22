import React from "react";

function HubDetailsForm({ hubDetails, setHubDetails }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHubDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const hubFormData = [
    { labelName: "Hub Name", name: "hubName", type: "text" },
    { labelName: "Hub Location", name: "hubLocation", type: "text" },
    { labelName: "Hub Owner Email", name: "ownerEmail", type: "email" },
    { labelName: "Hub Owner Password", name: "ownerPassword", type: "password" },
    { labelName: "Latitude", name: "latitude", type: "text" },
    { labelName: "Longitude", name: "longitude", type: "text" },
  ];

  return (
    <div id="barlowFont">
      <h1 className="text-lg lg:text-2xl my-2">Hub Details</h1>
      <div className="flex">
        <form>
          {hubFormData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between my-5 items-center lg:mr-40"
            >
              <label className="font-medium text-sm lg:text-base">{data.labelName}</label>
              <input
                type={data.type}
                name={data.name}
                value={hubDetails[data.name] || ""}
                onChange={handleInputChange}
                className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 lg:w-80 w-[45vw] text-sm lg:text-base"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default HubDetailsForm;
