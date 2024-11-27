import { Instance } from "../Axios/axiosInstance";

export const LoginApi = (value) => {
  return Instance.post("/master/login", { ...value });
};

export const OTPLoginApi = (value) => {
  return Instance.post("/login/send-otp", {...value});
};