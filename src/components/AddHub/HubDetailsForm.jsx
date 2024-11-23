import React from "react";

function HubDetailsForm() {
  const hubFormData = [
    {
      labelName: "Hub Name",
      type: "text",
    },
    {
      labelName: "Hub Location",
      type: "text",
    },
    {
      labelName: "Hub User Name",
      type: "text",
    },
    {
      labelName: "Hub Password",
      type: "password",
    },
  ];
  return (
    <div id="barlowFont" className="p-5">
      <h1 className="text-2xl my-2">Hub Details</h1>
      <div className="flex">
        <form>
          {hubFormData.map((data, index) => (
            <div key={index} className="flex justify-between my-5 items-center mr-40">
              <label className="font-medium">{data.labelName}</label>
              <input type={data.type} className="bg-[#FDFDFD] rounded-lg ml-5 px-5 py-1 w-80"/>
            </div>
          ))}
        </form>
        <div>
          <form>
            <div  className="flex justify-between my-2 items-center">
              <label className="font-medium">Hub ID</label>
              <input type="text" className="bg-[#FDFDFD] rounded-lg ml-5 py-1 px-5 w-80" />
            </div>
            <h1 className="text-center my-5 font-medium text-lg">OR Details</h1>
            <div>
              <label className="font-medium">QR Link</label>
              <input type="text" className="bg-[#FDFDFD] rounded-lg ml-5 py-1 px-5 w-80" placeholder="https://thomsonqr"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HubDetailsForm;
