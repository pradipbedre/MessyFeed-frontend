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
        <div className="image">
          <img src={Profile} alt="profil pic" />
        </div>
        <h2 className="user-name">Pradip Bedre</h2>
        <div className="user-info">
          <div className="item">
            <label htmlFor="" className="header">
              Email:
            </label>
            <label className="detail">pradip@gmail.com</label>
          </div>
          <div className="item">
            <label htmlFor="" className="header">
              Password:
            </label>
            <label className="detail">Pk@9168207271</label>
          </div>
          <div className="item">
            <label htmlFor="" className="header">
              Mobile No:
            </label>
            <label className="detail">9168207273</label>
          </div>
          <div className="item">
            <label htmlFor=" " className="header">
              Address:
            </label>
            <label className="detail">
              at post loha nanded maharashtra 431708
            </label>
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
