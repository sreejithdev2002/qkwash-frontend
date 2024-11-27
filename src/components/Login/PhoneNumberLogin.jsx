import React, { useRef, useState, useEffect } from "react";
import ContinueBtn from "../ContinueBtn";
import { useNavigate } from "react-router-dom";
// import { LoginApi, OTPLoginApi } from "../../Services/Api";
import axios from "axios";
import { toast } from "react-toastify";

function PhoneNumberAndOtpLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const inputs = useRef([]);

  useEffect(() => {
    if (step === 2) {
      inputs.current[0]?.focus();
    }
  }, [step]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);
  };

  const handlePhoneSubmit = async () => {
    if (phone.length === 10) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://srv630050.hstgr.cloud:3000/api/master/login",
          {
            mastermobile: phone,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          const { otp, sessionToken } = response.data;

          sessionStorage.setItem("otp", otp);
          sessionStorage.setItem("sessionToken", sessionToken);

          toast.success("Phone number is validated, OTP sent");
          console.log("Phone number validated, OTP sent.");

          setStep(2);
        } else {
          toast.error(response.message || "Error occurred during login.");
        }
      } catch (error) {
        console.error("Error validating phone number:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please enter a valid 10-digit phone number.");
    }
  };

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      setLoading(true);

      const storedOtp = sessionStorage.getItem("otp");

      try {
        if (enteredOtp === storedOtp) {
          console.log("OTP verified successfully.");
          toast.success("OTP verified successfully.");
          navigate("/dashboard");
        } else {
          toast.error("Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please enter a valid 4-digit OTP.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {step === 1 ? (
        <div className="flex mt-10">
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="10"
            className="rounded-3xl w-[30vw] mx-1 px-4 font-light placeholder:text-[#817C7C] text-xl focus:outline-[#7AEC50]"
            placeholder="Enter your mobile number"
            disabled={loading}
          />
          <ContinueBtn click={handlePhoneSubmit} disabled={loading} />
        </div>
      ) : (
        <>
          <h1 className="text-xl font-light mb-4 text-[#817C7C]">Enter OTP</h1>
          <div className="flex justify-center mb-6">
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index]) {
                    handleBackspace(index);
                  }
                }}
                ref={(el) => (inputs.current[index] = el)}
                className="rounded-2xl mx-1 px-4 text-xl text-center w-12 h-12 focus:outline-[#7AEC50] border border-gray-300"
                placeholder="0"
                disabled={loading}
              />
            ))}
          </div>
          <ContinueBtn click={handleOtpSubmit} disabled={loading} />
        </>
      )}
    </div>
  );
}

export default PhoneNumberAndOtpLogin;
