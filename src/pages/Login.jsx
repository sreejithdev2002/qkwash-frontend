import React from "react";
import QKWashLogo from "../components/QKWashLogo";
import PhoneNumberLogin from "../components/Login/PhoneNumberLogin";

function Login() {


  return (
    <div className="h-screen bg-[#89F3FF] flex flex-col justify-center items-center">
      <QKWashLogo />
      <PhoneNumberLogin/>
    </div>
  );
}

export default Login;
