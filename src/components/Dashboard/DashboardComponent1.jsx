import React from "react";

function DashboardComponent1({ priceData }) {
  const priceDatas = [
    {
      name: "Today Earnings",
      number: priceData.today || 0,
      color: "bg-[#ECCECE]",
    },
    {
      name: "Last Week Earnings",
      number: priceData.week || 0,
      color: "bg-[#A8C5F1]",
    },
    {
      name: "Last Month Earnings",
      number: priceData.month || 0,
      color: "bg-[#D77DD4]",
    },
  ];

  return (
    <div className="flex">
      {priceDatas.map((data, index) => (
        <div
          key={index}
          className={`${data.color} lg:w-[40vw] rounded-xl mx-1 lg:mx-5 my-5 lg:p-5 p-3 shadow-sm`}
          id="barlowFont"
        >
          <h1 className="font-medium text-[#464255] text-xs">{data.name}</h1>
          <h2 className="text-2xl lg:text-4xl font-medium text-[#464255]">{data.number}</h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardComponent1;
