import React from "react";
import Header from "./Dashboard/Header";
import DashboardComponent from "./Dashboard/DashboardComponent";
import DashboardComponent1 from "./Dashboard/DashboardComponent1";
import DashboardHubList from "./Dashboard/DashboardHubList";

function MainPage() {
  return (
    <div className="w-[80vw] bg-[#89F3FF] h-screen px-5 pt-5">
      <Header/>
      <DashboardComponent/>
      <DashboardComponent1/>
      <DashboardHubList/>
    </div>
  );
}

export default MainPage;
