import React from 'react'
import Header from '../components/Dashboard/Header';
import Sidebar from '../components/Sidebar';
import HublistComponent from '../components/HubList/HublistComponent';
import AddHubCard from '../components/AddHubCard';

function HubList() {
    let data = "hidden";
    let position = "top-8 right-20"
    return (
      <div className="flex">
        <Sidebar />
        <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
          <Header hide={data} />
          <HublistComponent/>
          <AddHubCard position={position}/>
        </div>
      </div>
  )
}

export default HubList