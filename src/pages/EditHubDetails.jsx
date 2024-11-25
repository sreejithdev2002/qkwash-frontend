import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Dashboard/Header';
import EditHubDetailsForm from '../components/EditHubDetails.jsx/EditHubDetailsForm';
import EditDeviceDeailsForm from '../components/EditHubDetails.jsx/EditDeviceDeailsForm';
import EditPriceDetails from '../components/EditHubDetails.jsx/EditPriceDetails';

function EditHubDetails() {
    let data = "hidden";
    return (
      <div className="flex">
        <Sidebar />
        <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5 overflow-auto">
          <Header hide={data} />
          <h1 id='barlowFont' className='text-2xl font-medium my-5'>Edit Hub Details</h1>
          <EditHubDetailsForm/>
          <EditDeviceDeailsForm/>
          <EditPriceDetails/>
          <div id='barlowFont' className='flex justify-center mt-5 mb-10'>
            <button className='px-5 py-1 bg-[#7AEC50] rounded-md font-medium'>SAVE</button>
          </div>
        </div>
      </div>
  )
}

export default EditHubDetails