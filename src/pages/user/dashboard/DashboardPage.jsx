import React, { useState } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import userDImg from "../../../assets/user-dashboard.svg";
import Navbar from "../../../components/user/Navbar";
const DashboardPage = () => {
  return (
    <div className="userDashboardContainer">
      <Navbar />
      <div className="dashboard-content">
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
        <div className="all-buttons">
          <Link to="/dashboard/addNewCustomer">
            <button>Add New Customer</button>
          </Link>
          <Link to="/dashboard/viewAllCustomer">
            <button>View All Customer</button>
          </Link>
          <Link to="/dashboard/mealCoupon">
            <button>Meal Coupons</button>
          </Link>
          <Link to="/dashboard/renewCustomer">
            <button>Renew Customer</button>
          </Link>
        </div>
        <img src={userDImg} className="userDImg" />
      </div>
    </div>
  );
};

export default DashboardPage;
