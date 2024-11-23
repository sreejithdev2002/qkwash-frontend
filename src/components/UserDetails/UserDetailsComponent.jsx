import React from "react";

function UserDetailsComponent() {
  return (
    <div id="barlowFont">
      <h1 className="my-5 font-semibold text-2xl text-[#464255]">User List</h1>
      <div className="grid grid-cols-5 px-5 items-center">
        <div>
          <h1 className="font-medium text-[#464255] text-3xl">Thomson</h1>
          <p className="font-medium text-[#A3A3A3] text-lg">#454646546464</p>
        </div>
        <div>
          <h1 className="font-medium text-lg">Mobile Number</h1>
          <p className="font-medium text-lg">7592990849</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsComponent;
