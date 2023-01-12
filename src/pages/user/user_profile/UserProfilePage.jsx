import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import "./user_profile.scss";
import Profile from "../../../assets/profile.png";
import {
  DashboardButton,
  CustomButtom,
} from "../../../components/user/shared/SharedComponent";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <div className="userProfileContainer">
      <Navbar />
      <div className="profileContent">
        <div className="userContent">
          <div className="user-item">
            <label>Name:</label>
            <label>Email:</label>
            <label>Password:</label>
            <label>Mobile No:</label>
            <label>Gender:</label>
            <label>Address:</label>
          </div>
          <div className="user-info">
            <label>Pradip Bedre</label>
            <label>pradip@gmail.com</label>
            <label>Pk@9168207271</label>
            <label>9168207273</label>
            <label>Male</label>
            <p>at post loha nanded </p>
          </div>
        </div>
        <div className="buttons">
          <Link to="/dashboard/userProfile/update">
            <CustomButtom name={"Update Profile"} />
          </Link>
          <DashboardButton />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
