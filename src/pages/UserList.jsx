import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Dashboard/Header";
import UserlistComponent from "../components/Userlist/UserlistComponent";

function UserList() {
  let data = "hidden";
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
        <Header hide={data} />
        <UserlistComponent/>
      </div>
    </div>
  );
}

export default UserList;
