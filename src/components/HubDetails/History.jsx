import React from "react";

function History() {
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
    <div className="overflow-auto h-[60vh]">
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
  );
}

export default History;
