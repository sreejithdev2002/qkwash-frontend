import React from "react";

function UserDetailsTable() {
  const tableData = [
    {
      hubId: "124",
      date: "20-12-24",
      deviceId: "123",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      hubId: "124",
      date: "20-12-24",
      deviceId: "353",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      hubId: "124",
      date: "20-12-24",
      deviceId: "353",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      hubId: "124",
      date: "20-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
    {
      hubId: "124",
      date: "19-12-24",
      deviceId: "353",
      cycles: "HV WASH",
      amount: 130,
    },
    {
      hubId: "124",
      date: "19-12-24",
      deviceId: "123",
      cycles: "QK WASH",
      amount: 100,
    },
   
  ];
  return (
    <table id="montserratFont" className="w-[75vw] mt-5 overflow-auto h-10">
      <thead>
        <tr>
          <th className="border-b border-black px-10 py-5 font-medium text-2xl">
            HUB ID
          </th>
          <th className="border-b border-black px-10 py-5 font-medium text-2xl">
            DATE
          </th>
          <th className="border-b border-black px-10 py-5 font-medium text-2xl">
            DEVICE ID
          </th>
          <th className="border-b border-black px-10 py-5 font-medium text-2xl">
            CYCLES
          </th>
          <th className="border-b border-black px-10 py-5 font-medium text-2xl">
            AMOUNT
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr className="text-center hover:bg-black hover:text-[#89F3FF] transition-colors duration-200">
            <td className="p-5 font-medium text-lg">{data.hubId}</td>
            <td className="p-5 font-medium text-lg">{data.date}</td>
            <td className="p-5 font-medium text-lg">{data.deviceId}</td>
            <td className="p-5 font-medium text-lg">{data.cycles}</td>
            <td className="p-5 font-medium text-lg">{data.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserDetailsTable;
