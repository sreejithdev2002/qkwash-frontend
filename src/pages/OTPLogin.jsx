import React from "react";
import QKWashLogo from "../components/QKWashLogo";
import OtpLogin from "../components/Login/OtpLogin";

function OTPLogin() {
  return (
    <div className="h-screen bg-[#89F3FF] flex flex-col justify-center items-center">
      <QKWashLogo />
      <OtpLogin />
    </div>
  );
}

export default OTPLogin;
