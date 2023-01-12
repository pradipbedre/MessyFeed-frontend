import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import ImageSlider from "../../../components/user/imageSlider/ImageSlider";
import "./mess_profile.scss";
import { Link } from "react-router-dom";
import {
  CustomButtom,
  DashboardButton,
} from "../../../components/user/shared/SharedComponent";
const MessProfilePage = () => {
  const urls = [
    "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];
  return (
    <div className="messProfileContainer">
      <Navbar />
      <div className="messContainer">
        <h1 className="mess-name">Yummy Mess</h1>
        <div className="slide-show">
          <ImageSlider urls={urls} />
        </div>
        <div className="mess-info">
          <div className="item-name">
            <label>Email:</label>
            <label>Contact No:</label>
            <label>Address:</label>
            <label>Pincode:</label>
          </div>
          <div className="item-info">
            <label>yummymess@gmail.com</label>
            <label>+91 9867543567</label>
            <label>Kalewadi,Pimpry,mainroad pune</label>
            <label>789065</label>
          </div>
        </div>
        <div className="buttons">
          <Link to="/dashboard/messProfile/update">
            <CustomButtom name={"update profile"} />
          </Link>
          <DashboardButton />
        </div>
      </div>
    </div>
  );
};

export default MessProfilePage;
