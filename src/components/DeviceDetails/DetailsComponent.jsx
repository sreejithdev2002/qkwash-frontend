import React from "react";

function DetailsComponent() {
  const tableData = [
    {
      userId: "U1234",
      date: "20-12-24",
      deviceId: "123",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      userId: "U1234",
      date: "20-12-24",
      deviceId: "353",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      userId: "U1232",
      date: "20-12-24",
      deviceId: "353",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      userId: "U1234",
      date: "20-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      userId: "U1233",
      date: "19-12-24",
      deviceId: "353",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      userId: "U1235",
      date: "19-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      userId: "U1235",
      date: "19-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      userId: "U1235",
      date: "19-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
  ];
  return (
    <div id="barlowFont">
      <div className="flex mt-10">
        <div className="mr-20">
          <h1 className="font-medium">Device 01</h1>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Type of Device</label>
            <span type="text" className="py-1 px-10 rounded-md bg-[#69E08B]">
              Washer
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Hub ID</label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #4546546467474
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <label className="mr-10 font-medium">Device ID</label>
            <span type="text" className="py-1 px-10 rounded-md bg-white">
              #4546546467474
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Status</h1>
          <div className="mt-5 flex">
            <span type="text" className="py-1 px-10 rounded-md bg-white mr-3">
              Maintenance
            </span>
            <span type="text" className="py-1 px-10 rounded-md bg-white ml-3">
              Not Working
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-10"
        id="montserratFont"
      >
        <div className="px-28 py-10 bg-[#8ED4DD] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>TODAY</h1>
          <p>9</p>
        </div>
        <div className="px-28 py-10 bg-[#64D577] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>LAST WEEK</h1>
          <p>79</p>
        </div>
        <div className="px-28 py-10 bg-[#8977DA] rounded-xl mr-5 text-center text-2xl font-medium">
          <h1>LAST MONTH</h1>
          <p>200</p>
        </div>
      </div>
      <div className="overflow-auto h-[60vh] mt-10">
        <table id="montserratFont" className="w-[75vw] mt-5">
          <thead className="sticky top-0 z-10 bg-[#89F3FF]">
            <tr>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                DATE
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                USER ID
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                DEVICE ID
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                CYCLES
              </th>
              <th className=" border-black px-10 py-5 pb-8 font-medium text-2xl">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200">
                <td className="p-5 font-medium text-lg">{data.date}</td>
                <td className="p-5 font-medium text-lg">{data.userId}</td>
                <td className="p-5 font-medium text-lg">{data.deviceId}</td>
                <td className="p-5 font-medium text-lg">{data.cycles}</td>
                <td className="p-5 font-medium text-lg">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsComponent;
