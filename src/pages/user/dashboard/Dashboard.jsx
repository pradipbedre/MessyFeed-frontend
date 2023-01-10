import React from "react";
import { HiMenu } from "react-icons/Hi";
import { MdDashboard } from "react-icons/Md";
import { CgProfile } from "react-icons/Cg";
import { AiOutlineUserAdd } from "react-icons/Ai";
import { MdStreetview } from "react-icons/Md";
import { FaTicketAlt } from "react-icons/Fa";
import { MdAutorenew } from "react-icons/Md";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="userDashboard">
        <div className="userDashboardSidebar">
          <nav>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="menu-btn">
              <HiMenu className="menu-btn" />
            </label>
            <div className="logo">
              <h2>MessyFeed</h2>
            </div>
          </nav>
          <hr />
          <div className="link-sections">
            <ul>
              <li className="active">
                <MdDashboard />
                <p>Dashboard</p>
              </li>
              <li>
                <CgProfile />
                <p>Mess Profile</p>
              </li>
              <li>
                <AiOutlineUserAdd id="addnewcustomer" />
                <p>Add New Customer</p>
              </li>
              <li>
                <MdStreetview />
                <p> View All Customer</p>
              </li>
              <li>
                <FaTicketAlt />
                <p>Meal Coupons</p>
              </li>
              <li>
                <MdAutorenew />
                <p>Renew Customer</p>
              </li>
            </ul>
          </div>
          <button className="logout">Logout</button>
        </div>

        <div className="mainContent">
          <div className="Navbar">
            <h2 className="mess-name">India Mess</h2>
            <div>
              <img
                className="user-profile"
                src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
                alt=""
              />
            </div>
          </div>
          <div className="content">
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
            gggggg
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
