import React from 'react'
import { useNavigate } from 'react-router-dom'

function HubDetailsHeader() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/hublist/edit/id");
    }
  return (
    <div className='flex justify-between' id='barlowFont'>
      <h1 className="my-5 text-2xl font-medium">Hub Details</h1>
      <button className='px-8 py-2 bg-[#7AEC50] my-5 rounded-md font-medium' onClick={handleClick}>EDIT</button>
    </div>
  )
}

export default HubDetailsHeader
