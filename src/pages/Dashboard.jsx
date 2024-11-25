import React from "react";
import QKWashLogo from "../components/QKWashLogo";
import Sidebar from "../components/Sidebar";
import MainPage from "../components/MainPage";
import AddHubCard from "../components/AddHubCard";

function Dashboard() {
  let position = "right-10 top-[370px]";
  return (
    <div className="flex">
      <Sidebar/>
      <MainPage/>
      <AddHubCard position={position}/>
    </div>
  );
}

export default Dashboard;
