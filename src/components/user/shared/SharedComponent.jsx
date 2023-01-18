import React from "react";
import "./shared_component.scss";
import okBtn from "../../../assets/popup.png";
import { MdDangerous } from "react-icons/md";

export const SuccessPopUp = ({ setPopup, name }) => {
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
          <h1>{name ? name : "Done"}</h1>
        </div>
      </div>
    </div>
  );
};

export const DangerPopUp = ({ setPopup, name }) => {
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
          <MdDangerous />
        </div>
        <div className="title">
          <h1>{name ? name : "Not Valid"}</h1>
        </div>
      </div>
    </div>
  );
};
