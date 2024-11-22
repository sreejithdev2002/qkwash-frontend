import React, { useState } from "react";
import ContinueBtn from "../ContinueBtn";

function PhoneNumberLogin() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Replace non-numeric characters
    setPhone(value.replace(/[^0-9]/g, ''));
  };

  let path = "otp-login"
  return (
    <div className="flex mt-10">
      <input
        type="text"
        name="phone"
        id="barlowFont"
        value={phone}
        onChange={handlePhoneChange}
        maxLength="10"
        className="rounded-3xl w-[30vw] mx-1 px-4 font-light placeholder:text-[#817C7C] text-xl focus:outline-[#7AEC50]"
        placeholder="Enter your mobile number"
      />
      <ContinueBtn path={path}/>
    </div>
  );
}

export default PhoneNumberLogin;
