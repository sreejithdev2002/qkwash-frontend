import React from "react";

function PriceDetailsForm({ priceDetails, setPriceDetails }) {
  const gridsForm = [
    { name: "QK Wash", key: "quick" },
    { name: "Heavy Wash", key: "steam" },
    { name: "QK Dryer", key: "otherThree" },
    { name: "Heavy Dryer", key: "stiffUltra" },
    { name: "Detergent", key: "detergent" },
  ];

  const handleInputChange = (key, type, value) => {
    setPriceDetails((prevDetails) => ({
      ...prevDetails,
      [key]: {
        ...prevDetails[key],
        [type]: value,
      },
    }));
  };

  return (
    <div id="barlowFont" className="mt-10 lg:mt-0 mb-10 lg:mb-5">
      <h1 className="my-5 text-lg lg:text-2xl font-medium">Price Details</h1>
      <div className="flex p-5">
        <h1>Mode</h1>
        <h1 className="ml-[90px] lg:ml-[175px] text-sm lg:text-base">Actual Price</h1>
        <h1 className="ml-[40px] lg:ml-[55px] text-sm lg:text-base">Offer Price</h1>
      </div>
      {gridsForm.map((data) => (
        <div key={data.key} className="flex">
          <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
          <input
            type="text"
            className="lg:ml-16 mb-3 py-1 px-5 rounded-lg w-20 lg:w-28 font-medium text-center"
            value={priceDetails[data.key]?.actual || ""}
            onChange={(e) =>
              handleInputChange(data.key, "actual", e.target.value)
            }
          />
          <input
            type="text"
            className="lg:ml-7 ml-1 mb-3 py-1 px-5 rounded-lg w-20 lg:w-28 font-medium text-center"
            value={priceDetails[data.key]?.offer || ""}
            onChange={(e) =>
              handleInputChange(data.key, "offer", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default PriceDetailsForm;

