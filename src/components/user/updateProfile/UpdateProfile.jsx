import React, { useState } from "react";
import "./update_profile.scss";
import Navbar from "../navbar/Navbar";
import { PopUp } from "../../../components/user/shared/SharedComponent";

const UpdateProfile = () => {
  const [popup, setPopup] = useState(false);
  const submitHandel = () => {
    setPopup(true);
  };
  return (
    <div className="updateProfileContainer">
      <Navbar />
      <div className="container">
        <h1 className="heading">Update Profile</h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="col-75">
              <input
                required
                id="password"
                type="password"
                name="name"
                placeholder="enter new password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="mobileno">Mobile No:</label>
            </div>
            <div className="col-75">
              <input
                required
                type="number"
                id="mobileno"
                name="mobileno"
                placeholder="enter mobile no"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Gender">Gender:</label>
            </div>
            <div className="col-75">
              <select id="Gender" name="Gender">
                <option value="Female" selected>
                  Other
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="address">Address:</label>
            </div>
            <div className="col-75">
              <textarea
                id="address"
                name="subject"
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

export default UpdateProfile;
