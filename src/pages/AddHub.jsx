import React from 'react'
import Header from '../components/Dashboard/Header';
import Sidebar from '../components/Sidebar';
import AddHubComponent from '../components/AddHub/AddHubComponent';
import HubDetailsForm from '../components/AddHub/HubDetailsForm';
import DeviceDetailsForm from '../components/AddHub/DeviceDetailsForm';
import PriceDetailsForm from '../components/AddHub/PriceDetailsForm';

function AddHub() {
    let data = "hidden";
    return (
      <div className='flex'>
        <Sidebar/>
        <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 overflow-auto">
          <Header hide={data} />
          <AddHubComponent/>
          <HubDetailsForm/>
          <DeviceDetailsForm/>
          <PriceDetailsForm/>
          <div className='flex justify-center mb-10 my-5'>
            <button className='bg-[#7AEC50] px-10 py-2 rounded-lg font-medium shadow hover:bg-[#75e44c]' id='barlowFont'>SAVE</button>
          </div>
        </div>
      </div>
  )
}

export default AddHub
