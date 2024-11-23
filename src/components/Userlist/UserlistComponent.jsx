import React from "react";

function UserlistComponent() {
  const userListData = [
    {
      name: "Thomson",
      id: "454646546464",
      mobile: "7592990849",
      totalWash: 20,
      totalDry: 20,
    },
    {
      name: "Thomson",
      id: "454646546464",
      mobile: "7592990849",
      totalWash: 20,
      totalDry: 20,
    },
    {
      name: "Thomson",
      id: "454646546464",
      mobile: "7592990849",
      totalWash: 20,
      totalDry: 20,
    },
    {
      name: "Thomson",
      id: "454646546464",
      mobile: "7592990849",
      totalWash: 20,
      totalDry: 20,
    },
  ];

  return (
    <div id="barlowFont">
      <h1 className="my-5 font-semibold text-2xl text-[#464255]">User List</h1>
      <div className="flex flex-col">
        {userListData.map((data) => (
          <div className="grid grid-cols-4 mx-0 justify-start bg-[#D9D9D9] hover:bg-[#d4d3d3] rounded-2xl p-4 my-3 transition duration-300 cursor-pointer">
            <div>
              <h1 className="text-2xl text-[#464255] font-medium">
                {data.name}
              </h1>
              <p className="font-medium text-[#A3A3A3]">#{data.id}</p>
            </div>
            <div>
              <h2 className="font-medium">Mobile Number</h2>
              <p className="font-medium">{data.mobile}</p>
            </div>
            <div>
              <h2 className="font-medium">Total Wash</h2>
              <p className="font-medium">{data.totalWash}</p>
            </div>
            <div>
              <h2 className="font-medium">Total Dry</h2>
              <p className="font-medium">{data.totalDry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserlistComponent;
