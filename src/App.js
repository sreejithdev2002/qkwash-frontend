import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddHub from "./pages/AddHub";
import PageOnDevelopment from "./pages/PageOnDevelopment";
import HubList from "./pages/HubList";
import HubDetails from "./pages/HubDetails";
import EditHubDetails from "./pages/EditHubDetails";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import ServiceRequest from "./pages/ServiceRequest";
import DeviceController from "./pages/DeviceController";
import DeviceDetails from "./pages/DeviceDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/userlist" element={<UserList />} />
          <Route path="/userlist/:usermobile" element={<UserDetails />} />

          <Route path="/addhub" element={<AddHub />} />
          <Route path="/hublist" element={<HubList />} />
          <Route path="/hublist/:id" element={<HubDetails />} />
          <Route path="/hublist/edit/id" element={<EditHubDetails />} />

          <Route path="/hublist/device-details" element={<DeviceDetails/>} />

          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/device-controller" element={<DeviceController />} />
          <Route path="*" element={<PageOnDevelopment />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
      </BrowserRouter>
    </>
  );
}

export default App;