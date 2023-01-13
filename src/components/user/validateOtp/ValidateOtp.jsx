import React from "react";
import "./validate_otp.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import { CustomButtom } from "../shared/SharedComponent";
import OTP from "../../../assets/otp.svg";
const ValidateOtp = () => {
  return (
    <div className="validateOtpContainer">
      <Navbar />
      <div className="validate-otp">
        <div className="get-input">
          <label htmlFor="">Enter OTP: </label>
          <input type="text" />
        </div>
        <CustomButtom name={"Mark Coupon"} />
      </div>
      <img src={OTP} alt="" />
    </div>
  );
};

export default ValidateOtp;
