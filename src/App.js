import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import OTPLogin from "./pages/OTPLogin";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddHub from "./pages/AddHub";
import PageOnDevelopment from "./pages/PageOnDevelopment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp-login" element={<OTPLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/userlist/id" element={<UserDetails />} />
          <Route path="/addhub" element={<AddHub />} />
          <Route path="/hublist" element={<PageOnDevelopment/>} />
          <Route path="/service-request" element={<PageOnDevelopment/>} />
          <Route path="/device-controller" element={<PageOnDevelopment/>} />
          <Route path="*" element={<PageOnDevelopment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
