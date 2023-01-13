import React, { useState } from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import { PopUp } from "../../../components/user/shared/SharedComponent";
import "./renew_customer.scss";
const RenewCustomerPage = () => {
  const [popup, setPopup] = useState(false);
  const submitHandel = () => {
    setPopup(true);
  };
  return (
    <div className="renewCustomerContainer">
      <Navbar />
      <div className="container">
        <h1 className="heading">Renew Customer</h1>
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
              <label htmlFor="date">Start Date: </label>
            </div>
            <div className="col-75">
              <input required id="date" type="date" placeholder="select date" />
            </div>
          </div>

          <div className="row">
            <input
              className="btn"
              type="submit"
              value="Renew Customer"
              onClick={submitHandel}
            />
          </div>
        </form>
      </div>
      {popup && <PopUp setPopup={setPopup} />}
    </div>
  );
};

export default RenewCustomerPage;
