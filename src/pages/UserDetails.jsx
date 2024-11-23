import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Dashboard/Header';
import UserDetailsComponent from '../components/UserDetails/UserDetailsComponent';
import UserDetailsTable from '../components/UserDetails/UserDetailsTable';

function UserDetails() {
    let data = "hidden";
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
        <Header hide={data} />
        <UserDetailsComponent/>
        <UserDetailsTable/>
      </div>
    </div>
  )
}

export default UserDetails
