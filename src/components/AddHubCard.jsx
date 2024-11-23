import React from 'react';
import chefImage from '../Assets/Images/chefImage.png';
import { useNavigate } from 'react-router-dom';

function AddHubCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addhub');
  }
  return (
    <div className='absolute bg-[#00B074] flex w-[15vw] p-5 right-10 top-[370px] rounded-xl shadow-md' id='barlowFont'>
      <div className='mr-3'>
        <p className='text-white text-xs font-medium mb-2 w-[7vw] mr-2'>Please, add new hub through button below</p>
        <button className='bg-white px-5 py-2 rounded-md text-sm text-[#464255]' onClick={handleClick} >+Add Hub</button>
      </div>
      <div className=''>
        <img src={chefImage} alt="" width={100} />
      </div>
    </div>
  )
}

export default AddHubCard
