function PriceDetailsForm1({ prices }) {
  return (
    <div id="barlowFont" className="mb-5">
      <h1 className="my-5 text-2xl font-medium">Price Details</h1>
      <div className="flex p-5">
        <h1>Mode</h1>
        <h1 className="ml-[175px]">Actual Price</h1>
        <h1 className="ml-[55px]">Offer Price</h1>
      </div>
      {prices.map((data, index) => (
        <div className="flex" key={index}>
          <h1 className="w-[150px] mb-3 py-1 px-5">{data.name}</h1>
          <input
            type="text"
            className="ml-16 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center"
            value={data.actualPrice}
            readOnly
          />
          <input
            type="text"
            className="ml-7 mb-3 py-1 px-5 rounded-lg w-28 font-medium text-center"
            value={data.offerPrice}
            readOnly
          />
        </div>
      ))}
    </div>
  );
}

export default PriceDetailsForm1;

