import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { PopUp } from "../../../components/user/shared/SharedComponent";
import "./update_mess.scss";
const UpadateMess = () => {
  const [popup, setPopup] = useState(false);
  const submitHandel = () => {
    setPopup(true);
  };
  return (
    <div className="updateMessContainer">
      <Navbar />
      <div className="container">
        <h1 className="heading">Update Mess Profile</h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Name:</label>
            </div>
            <div className="col-75">
              <input
                required
                type="text"
                placeholder="enter mess name"
                name="name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Upload Image 1:</label>
            </div>
            <div className="col-75">
              <input required type="file" />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Upload Image 2:</label>
            </div>
            <div className="col-75">
              <input required type="file" />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Upload Image 2:</label>
            </div>
            <div className="col-75">
              <input required type="file" />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Mobile No:</label>
            </div>
            <div className="col-75">
              <input required type="number" placeholder="enter mobile no" />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Email:</label>
            </div>
            <div className="col-75">
              <input required type="email" placeholder="enter email" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Pincode:</label>
            </div>
            <div className="col-75">
              <input required type="number" placeholder="enter pincode" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Address:</label>
            </div>
            <div className="col-75">
              <textarea
                required
                placeholder="enter address to update"
                style={{ height: "100px" }}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row">
            <input type="submit" defaultValue="Submit" onClick={submitHandel} />
          </div>
        </form>
      </div>
      {popup && <PopUp setPopup={setPopup} />}
    </div>
  );
};

export default UpadateMess;
