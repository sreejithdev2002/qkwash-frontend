import React, { useRef, useState } from "react";
import ContinueBtn from "../ContinueBtn";

function OtpLogin() {

  let path = "dashboard";

  const [otp, setOtp] = useState(["", "", "", ""]); // State for storing OTP digits
  const inputs = useRef([]); // To store input refs

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Allow only numbers
    const updatedOtp = [...otp];
    updatedOtp[index] = value; // Update the current index with the new value
    setOtp(updatedOtp);

    // Move to the next input if not the last
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-xl font-light mb-4 text-[#817C7C]" id="barlowFont">
        Enter OTP
      </h1>
      <div className="flex justify-center mb-6">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !otp[index]) {
                handleBackspace(index);
              }
            }}
            ref={(el) => (inputs.current[index] = el)}
            placeholder="0"
            className="rounded-2xl mx-1 px-4 font-light placeholder:text-[#817C7C] text-xl text-center w-12 h-12 focus:outline-[#7AEC50] border border-gray-300"
          />
        ))}
      </div>
      <ContinueBtn onClick={handleSubmit} path={path} />
    </div>
  );
}

export default OtpLogin;
