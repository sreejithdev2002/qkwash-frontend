import React from 'react'

function DashboardHubList() {
    const hubData = [
        {
            name: "Kerala Hostel Kochi",
            id: "123445"
        },
        {
            name: "Kerala Hostel Calicut",
            id: "123446"
        },
        {
            name: "Kerala Hostel Malappuram",
            id: "123447"
        },
        {
            name: "Kerala Hostel Thrissur",
            id: "123448"
        },
        {
            name: "Kerala Hostel Trivandrum",
            id: "123449"
        },
    ]
  return (
    <div className='bg-[#DCE7DDBD] rounded-2xl px-10 py-5 mt-2' id='barlowFont'>
      <h1 className='font-semibold text-2xl text-[#464255] pb-5'>Hub List</h1>
      <div className='h-[35vh] overflow-auto pr-5' id='scrollbar'>
        {hubData.map((data, index) => (
            <div key={index} className='bg-[#CEDCEC] rounded-xl px-5 py-2 my-2 scroll-smooth'>
                <h1 className='font-medium text-[#464255] text-2xl'>{data.name}</h1>
                <h2 className='font-medium text-[#A3A3A3] text-xl'>#{data.id}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardHubList
