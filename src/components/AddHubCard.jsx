import React from 'react';
import chefImage from '../Assets/Images/chefImage.png';
import { useNavigate } from 'react-router-dom';

function AddHubCard({position}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addhub');
  }
  return (
    <div className={`absolute bg-[#00B074] flex w-[40vw] lg:w-[15vw] p-5 ${position} rounded-xl shadow-md z-10`} id='barlowFont'>
      <div className='lg:mr-3'>
        <p className='text-white text-xs text-wrap font-medium mb-2 lg:mr-2'>Please, add new hub through button below</p>
        <button className='bg-white px-9 lg:px-5 py-2 rounded-md text-xs lg:text-sm text-[#464255]' onClick={handleClick} >+Add Hub</button>
      </div>
      <div className='hidden lg:block'>
        <img src={chefImage} alt="" width={100}/>
      </div>
    </div>
  )
}

export default AddHubCard
