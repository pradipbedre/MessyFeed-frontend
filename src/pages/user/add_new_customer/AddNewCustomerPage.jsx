import React, { useState } from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import "./add_new_customer.scss";
import {
  DashboardButton,
  PopUp,
} from "../../../components/user/shared/SharedComponent";

const AddNewCustomerPage = () => {
  const [popup, setPopup] = useState(false);
  const submitHandel = () => {
    setPopup(true);
  };
  return (
    <div className="addNewCustomerContainer">
      <Navbar />
      <DashboardButton />
      <div className="container">
        <h1 className="heading">Add New customer</h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Full Name:</label>
            </div>
            <div className="col-75">
              <input
                required
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your full name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Mobile No:</label>
            </div>
            <div className="col-75">
              <input
                required
                type="number"
                id="lname"
                name="lastname"
                placeholder="enter mobile no"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Email:</label>
            </div>
            <div className="col-75">
              <input
                required
                type="text"
                id="lname"
                name="lastname"
                placeholder="enter email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Gender">Gender:</label>
            </div>
            <div className="col-75">
              <select id="Gender" name="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Mess Plan">Mess Plan:</label>
            </div>
            <div className="col-75" required>
              <select id="Mess Plan" name="Mess Plan">
                <option value="Plan A">Plan A</option>
                <option value="Plan B">Plan B</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="Payment Option">Payment Option:</label>
            </div>
            <div className="col-75">
              <select id="Payment Option" name="Payment Option">
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Additional Details:</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
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

export default AddNewCustomerPage;
