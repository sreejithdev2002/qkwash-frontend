function PriceDetailsForm1({ prices }) {
  return (
    <div id="barlowFont" className="mt-10 lg:mt-0 mb-10 lg:mb-5">
      <h1 className="my-5 text-lg lg:text-2xl font-medium">Price Details</h1>
      <div className="flex p-5">
        <h1>Mode</h1>
        <h1 className="ml-[90px] lg:ml-[175px] text-sm lg:text-base">
          Actual Price
        </h1>
        <h1 className="ml-[40px] lg:ml-[55px] text-sm lg:text-base">
          Offer Price
        </h1>
      </div>
      {prices.map((data, index) => (
        <div className="flex" key={index}>
          <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
          <input
            type="text"
            className="lg:ml-16 mb-3 py-1 px-5 rounded-lg w-20 lg:w-28 font-medium text-center"
            value={data.actualPrice}
            readOnly
          />
          <input
            type="text"
            className="lg:ml-7 ml-1 mb-3 py-1 px-5 rounded-lg w-20 lg:w-28 font-medium text-center"
            value={data.offerPrice}
            readOnly
          />
        </div>
      ))}
    </div>
  );
}

export default PriceDetailsForm1;
