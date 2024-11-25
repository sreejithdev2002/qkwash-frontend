import React from 'react'

function EditPriceDetails() {
    const gridsForm = [
        {
          name: "qk wash",
          actualPrice: 100,
          offerPrice: 70
        },
        {
          name: "Heavy wash",
          actualPrice: 150,
          offerPrice: 90
        },
        {
          name: "qk Dryer",
          actualPrice: 90,
          offerPrice: 45
        },
        {
          name: "Heavy Dryer",
          actualPrice: 110,
          offerPrice: 75
        },
      ];
      return (
        <div id="barlowFont" className="mb-5">
          <h1 className="my-5 text-2xl font-medium">Price Details</h1>
          <div className="flex p-5">
            <h1>Mode</h1>
            <h1 className="ml-[175px]">Actual Price</h1>
            <h1 className="ml-[55px]">Offer Price</h1>
          </div>
          {gridsForm.map((data) => (
            <div className="flex">
              <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
              <input type="text" className="ml-16 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center" value={data.actualPrice} />
              <input type="text" className="ml-7 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center" value={data.offerPrice} />
            </div>
          ))}
        </div>
  )
}

export default EditPriceDetails
