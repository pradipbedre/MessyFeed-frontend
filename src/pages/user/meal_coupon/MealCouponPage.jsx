import React, { useState } from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import "./meal_coupon.scss";
import { Link } from "react-router-dom";
const MealCouponPage = () => {
  return (
    <div className="mealCouponContainer">
      <Navbar />
      <div className="container">
        <h1 className="heading">Mark Coupon</h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="email">Email: </label>
            </div>
            <div className="col-75">
              <input
                required
                id="email"
                type="password"
                placeholder="enter email..."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="Mess Plan">Meal Time:</label>
            </div>
            <div className="col-75" required>
              <select id="Mess Plan" name="Mess Plan">
                <option value="Plan A">Lunch</option>
                <option value="Plan B">Dinner</option>
              </select>
            </div>
          </div>
        </form>
        <Link to="/dashboard/mealCoupon/validateOtp">
          <input type="submit" value="Send OTP" />
        </Link>
      </div>
    </div>
  );
};

export default MealCouponPage;
