import React from "react";

function EditPriceDetails({ prices, setPriceData }) {
  const handleInputChange = (index, field, value) => {
    setPriceData((prevPrices) =>
      prevPrices.map((price, i) =>
        i === index ? { ...price, [field]: value } : price
      )
    );
  };

  return (
    <div id="barlowFont" className="mb-5">
      <h1 className="my-5 text-2xl font-medium">Price Details</h1>
      <div className="flex p-5">
        <h1 className="w-[150px]">Mode</h1>
        <h1 className="w-[150px] text-center">Actual Price</h1>
        <h1 className="w-[150px] text-center">Offer Price</h1>
      </div>
      {prices.map((data, index) => (
        <div className="flex items-center" key={index}>
          <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
          <input
            type="number"
            className="ml-3 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center"
            value={data.actualPrice}
            onChange={(e) =>
              handleInputChange(index, "actualPrice", e.target.value)
            }
          />
          <input
            type="number"
            className="ml-7 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center"
            value={data.offerPrice}
            onChange={(e) =>
              handleInputChange(index, "offerPrice", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default EditPriceDetails;
