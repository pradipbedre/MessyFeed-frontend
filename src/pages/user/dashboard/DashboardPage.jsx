import React, { useState } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import userDImg from "../../../assets/user-dashboard.svg";
import Navbar from "../../../components/user/navbar/Navbar";
import { MediumCustomButton } from "../../../components/user/shared/SharedComponent";
const DashboardPage = () => {
  return (
    <div className="userDashboardContainer">
      <Navbar />
      <div className="dashboard-content">
        <div className="all-buttons">
          <Link to="/dashboard/addNewCustomer">
            <MediumCustomButton name={"Add New Customer"} />
          </Link>
          <Link to="/dashboard/viewAllCustomer">
            <MediumCustomButton name={"View All Customer"} />
          </Link>
          <Link to="/dashboard/mealCoupon">
            <MediumCustomButton name={"Meal Coupons"} />
          </Link>
          <Link to="/dashboard/renewCustomer">
            <MediumCustomButton name={"Renew Customer"} />
          </Link>
        </div>
        <div className="stats">
          <div className="total">
            <h3>Total Meal Soled</h3>
            <p>30</p>
          </div>
          <div className="total">
            <h3>Total Actice Customer</h3>
            <p>30</p>
          </div>
        </div>
        <img src={userDImg} className="userDImg" />
      </div>
    </div>
  );
};

export default DashboardPage;
