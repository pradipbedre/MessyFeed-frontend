import React from "react";
import Navbar from "../navbar/Navbar";
import { CustomButton, DashboardButton } from "../shared/SharedComponent";
import { Link } from "react-router-dom";
import "./customer_details.scss";
const CustomerDetails = () => {
  return (
    <div className="customerProfileContainer">
      <Navbar />
      <div className="profileContent">
        <div className="userContent">
          <div className="user-item">
            <label>Name:</label>
            <label>Mobile No:</label>
            <label>Email:</label>
            <label>Gender:</label>
            <label>Status:</label>
            <label>Mess Plan:</label>
            <label>Payment Option:</label>
            <label>Additional Details:</label>
          </div>
          <div className="user-info">
            <label>Pradip Bedre</label>
            <label>pradip@gmail.com</label>
            <label>Pk@9168207271</label>
            <label>Male</label>
            <label>Active</label>
            <label>Plan A</label>
            <label>Cash</label>
            <p>Nothing</p>
          </div>
        </div>
        <div className="buttons">
          <Link to="/dashboard/viewAllCustomer/viewCustomer/update">
            <CustomButton name={"Update Profile"} />
          </Link>
          <DashboardButton />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
