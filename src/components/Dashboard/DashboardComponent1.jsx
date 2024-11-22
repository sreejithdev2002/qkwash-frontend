import React from 'react'

function DashboardComponent1() {
    const priceData = [
        {
            name: "Today Earnings",
            number: 1200,
            color: "bg-[#ECCECE]"
        },
        {
            name: "Last Week Earnings",
            number: 25000,
            color: "bg-[#A8C5F1]"
        },
        {
            name: "Last Month Earnings",
            number: 325000,
            color: "bg-[#D77DD4]"
        },
    ]
  return (
    <div className='flex'>
      {priceData.map((data) => (
        <div className={`${data.color} w-[40vw] rounded-xl mx-5 my-5 p-5 shadow-sm`} id='barlowFont'>
            <h1 className='font-medium text-[#464255]'>{data.name}</h1>
            <h2 className='text-4xl font-medium text-[#464255]'>{data.number}</h2>
        </div>
      ))}
    </div>
  )
}

export default DashboardComponent1
