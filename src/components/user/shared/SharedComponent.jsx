import React from "react";
import "./shared_component.scss";
import okBtn from "../../../assets/popup.png";
import { Link } from "react-router-dom";

export const PopUp = ({ setPopup }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setPopup(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <img src={okBtn} alt="done image" />
        </div>
        <div className="title">
          <h1>Done</h1>
        </div>
      </div>
    </div>
  );
};

export const DashboardButton = () => {
  return (
    <Link to="/dashboard">
      <button className="dashboardBtn">Dashboard</button>
    </Link>
  );
};
