import React from "react";

function PriceDetailsForm() {
  const gridsForm = [
    {
      name: "qk wash",
    },
    {
      name: "Heavy wash",
    },
    {
      name: "qk Dryer",
    },
    {
      name: "Heavy Dryer",
    },
  ];
  return (
    <div id="barlowFont" className="p-5">
      <h1 className="text-2xl my-2">Price Details</h1>
      <div className="flex p-5">
        <h1>
            Mode
        </h1>
        <h1 className="ml-[175px]">Actual Price</h1>
        <h1 className="ml-[55px]">Offer Price</h1>
      </div>
      {gridsForm.map((data) => (
        <div className="flex">
          <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
          <input type="text" className="ml-16 mb-3 py-1 px-5 rounded-lg w-28" />
          <input type="text" className="ml-7 mb-3 py-1 px-5 rounded-lg w-28" />
        </div>
      ))}
    </div>
  );
}

export default PriceDetailsForm;
