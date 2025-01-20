import React from "react";
import {
  BarsIcon,
  FileIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "../Assets/Icons";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    { name: "Hub List", icon: <BarsIcon />, path: "/hublist" },
    { name: "Service Request", icon: <FileIcon />, path: "/service-request" },
    {
      name: "Device Controller",
      icon: <UsersIcon />,
      path: "/device-controller",
    },
    { name: "User Detail", icon: <UserIcon />, path: "/userlist" },
  ];

  return (
    <div className="w-[20vw] h-screen bg-[#E5FE92]">
      <div className="flex flex-col justify-center text-center px-1 my-5 lg:p-10">
        <h1
          id="poppinsFont"
          className="text-[#0E7EC4] text-nowrap text-[17px] lg:text-5xl font-bold mb-1 lg:mb-3"
        >
          qk wash
        </h1>
        <p
          id="barlowFont"
          className="text-center font-medium text-[10px] lg:text-lg"
        >
          Modern Admin Dashboard
        </p>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 lg:px-3 rounded-lg cursor-pointer relative"
            onClick={
              () =>
                item.path === "/device-controller"
                  ? window.open(item.path, "_blank") // Open in new tab
                  : navigate(item.path) // Navigate normally
            }
          >
            <span
              className={`absolute left-0 h-full w-1 bg-[#00B074] rounded-r-md ${
                location.pathname.startsWith(item.path) ? "block" : "hidden"
              }`}
            ></span>
            <div
              className={`flex justify-start items-center mx-6 lg:mx-8 hover:bg-[#308FFD36] py-3 px-5 rounded-lg w-52 ${
                location.pathname.startsWith(item.path)
                  ? "text-[#00B074] bg-[#308FFD36]"
                  : "text-[#464255]"
              }`}
            >
              <span className="text-lg w-10 lg:mr-5 mx-[-20px] flex justify-center items-center">
                {item.icon}
              </span>
              <span
                className="text-sm font-medium hidden lg:block"
                id="barlowFont"
              >
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
