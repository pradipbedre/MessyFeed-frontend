import React, { useState } from "react";
import "./validate_otp.scss";
import Navbar from "../navbar/Navbar";
import { CustomButton } from "../shared/SharedComponent";
import OTP from "../../../assets/otp.svg";
import { PopUp } from "../shared/SharedComponent";
const ValidateOtp = () => {
  const [popup, setPopup] = useState(false);
  const submitHandel = () => {
    setPopup(true);
  };
  return (
    <div className="validateOtpContainer">
      <Navbar />
      <div className="validate-otp">
        <div className="get-input">
          <label htmlFor="">Enter OTP</label>
          <input type="text" />
          <CustomButton name={"Mark Coupon"} onClick={submitHandel} />
        </div>
        <img src={OTP} alt="OTP" />
      </div>
      {popup && <PopUp setPopup={setPopup} />}
    </div>
  );
};

export default ValidateOtp;
