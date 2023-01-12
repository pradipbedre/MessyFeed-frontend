import React, { useState } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import userDImg from "../../../assets/user-dashboard.svg";
import Navbar from "../../../components/user/navbar/Navbar";
import { MediumCustomButtom } from "../../../components/user/shared/SharedComponent";
const DashboardPage = () => {
  return (
    <div className="userDashboardContainer">
      <Navbar />
      <div className="dashboard-content">
        <div className="all-buttons">
          <Link to="/dashboard/addNewCustomer">
            <MediumCustomButtom name={"Add New Customer"} />
          </Link>
          <Link to="/dashboard/viewAllCustomer">
            <MediumCustomButtom name={"View All Customer"} />
            <button></button>
          </Link>
          <Link to="/dashboard/mealCoupon">
            <MediumCustomButtom name={"Meal Coupons"} />
          </Link>
          <Link to="/dashboard/renewCustomer">
            <MediumCustomButtom name={"Renew Customer"} />
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
