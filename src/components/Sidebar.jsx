import React, { useState } from "react";
import {
  BarsIcon,
  FileIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "../Assets/Icons";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <HomeIcon /> },
    { name: "Hub List", icon: <BarsIcon /> },
    { name: "Service Request", icon: <FileIcon /> },
    { name: "Device Controller", icon: <UsersIcon /> },
    { name: "User Detail", icon: <UserIcon /> },
  ];

  return (
    <div className="w-[20vw] h-screen bg-[#E5FE92]">
      <div className="flex flex-col justify-center text-center p-10">
        <h1 id="poppinsFont" className="text-[#0E7EC4] text-5xl font-bold mb-3">
          qk wash
        </h1>
        <p id="barlowFont" className="text-center font-medium text-lg">
          Modern Admin Dashboard
        </p>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 px-3 rounded-lg cursor-pointer relative"
            onClick={() => setActive(item.name)}
          >
            <span
              className={`absolute left-0 h-full w-1 bg-[#00B074] rounded-r-md ${
                active === item.name ? "block" : "hidden"
              }`}
            ></span>
            <div
              className={`flex justify-start items-center mx-8 hover:bg-[#308FFD36] py-3 px-5 rounded-lg w-52 ${
                active === item.name
                  ? "text-[#00B074] bg-[#308FFD36]"
                  : "text-[#464255]"
              }`}
            >
              <span className="text-lg w-10 mr-5 flex justify-center items-center">
                {item.icon}
              </span>
              <span className="text-sm font-medium" id="barlowFont">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
