import React from "react";
import "./navbar.scss";
import DashboardContent from "../../dashboardContent/DashboardContent";
const Navbar = () => {
  return (
    <div className="userDashboardNavbar">
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
        <DashboardContent />
      </div>
    </div>
  );
};

export default Navbar;
