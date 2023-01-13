import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import { CustomButtom } from "../../../components/user/shared/SharedComponent";
import "./meal_coupon.scss";
import coupon from "../../../assets/coupon.svg";
const MealCouponPage = () => {
  return (
    <div className="mealCouponContainer">
      <Navbar />
      <div className="get-details">
        <div className="item">
          <label htmlFor="">Enter Email</label>
          <input type="text" />
        </div>
        <div className="meal-time">
          <label htmlFor="Meal">Meal Time</label>
          <select id="Meal" name="Meal">
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <CustomButtom name={"Send OTP"} />
      </div>
      <img src={coupon} alt="coupon" />
    </div>
  );
};

export default MealCouponPage;
