import React from "react";

function EditHubDetailsForm() {
  const hubFormData = [
    {
      labelName: "Hub Name",
      type: "text",
      value: "Kerala Hostel",
    },
    {
      labelName: "Hub Location",
      type: "text",
      value: "Kochi",
    },
    {
      labelName: "Hub User Name",
      type: "text",
      value: "keralahostelkochi",
    },
    {
      labelName: "Hub Password",
      type: "password",
      value: "qkwashkeralahostel2024",
    },
    {
      labelName: "Latitude",
      type: "text",
      value: "1.82.443.21"
    },
    {
      labelName: "Longitude",
      type: "text",
      value: "12.432.23.43"
    },
  ];
  return (
    <div>
      <h1 className="text-2xl mt-10 mb-2">Hub Details</h1>
      <div className="flex">
        <form>
          {hubFormData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between my-5 items-center mr-40"
            >
              <label className="font-medium">{data.labelName}</label>
              <input
                type={data.type}
                className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 w-80"
                value={data.value}
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
                value="#1234344334"
              />
            </div>
            {/* <h1 className="text-center my-5 font-medium text-lg">QR Details</h1>
            <div>
              <label className="font-medium">QR Link</label>
              <input
                type="text"
                className="bg-[#FDFDFD] rounded-lg ml-5 py-1 px-5 w-80"
                placeholder="https://thomsonqr"
                value="https://thomsonqr"
              />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditHubDetailsForm;
