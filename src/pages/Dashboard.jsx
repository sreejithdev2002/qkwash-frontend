import React from "react";
import QKWashLogo from "../components/QKWashLogo";
import Sidebar from "../components/Sidebar";
import MainPage from "../components/MainPage";
import AddHubCard from "../components/AddHubCard";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar/>
      <MainPage/>
      <AddHubCard/>
    </div>
  );
}

export default Dashboard;
