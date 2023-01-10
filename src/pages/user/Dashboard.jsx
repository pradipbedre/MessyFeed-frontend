import React from "react";
import Sidebar from "../../components/user/Sidebar/Sidebar";
import Navbar from "../../components/user/Navbar/Navbar";
import DashboardContent from "../../components/dashboardContent/DashboardContent";
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <>
      <div className="userDashboard">
        <Sidebar />
        <Navbar />
      </div>
    
    </>
  );
};

export default Dashboard;
