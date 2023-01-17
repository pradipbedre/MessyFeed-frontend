import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ViewMess from "./pages/mess/ViewMess.jsx";
import AddMess from "./pages/mess/AddMess.jsx";
import AddPlan from "./pages/mess/AddPlan.jsx";
import UpdateCustomer from "./pages/customer/UpdateCustomer.jsx";
import AddCustomer from "./pages/customer/AddCustomer.jsx";
import DeleteCustomer from "./pages/customer/DeleteCustomer.jsx";
import SendOtp from "./pages/customer/SendOtp.jsx";
import ValidateOtp from "./pages/customer/ValidateOtp.jsx";
import PlanRenewal from "./pages/customer/PlanRenewal.jsx";
import ViewCustomers from "./pages/customer/ViewCustomers.jsx";
import ViewProfile from "./pages/user/ViewProfile.jsx";
import Logout from "./pages/user/Logout.jsx";
import UserPage from "./pages/user/User.jsx";
import ShowCustomer from "./pages/customer/ShowCustomer.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Navigate to="mess" replace /> */}
      <Route path="/user" element={<UserPage />}>
        <Route path="profile" element={<ViewProfile />} />
        <Route path="logout" element={<Logout />} />

        <Route path="/user/mess">
          <Route path="view" element={<ViewMess />} />
          <Route path="add" element={<AddMess />} />
          <Route path="plans" element={<AddPlan />} />

          <Route path="/user/mess/customer">
            <Route path="viewAll" element={<ViewCustomers />} />
            <Route path="view" element={<ShowCustomer />} />
            <Route path="add" element={<AddCustomer />} />
            <Route path="update" element={<UpdateCustomer />} />
            <Route path="delete" element={<DeleteCustomer />} />
            <Route path="sendOtp" element={<SendOtp />} />
            <Route path="validateOtp" element={<ValidateOtp />} />
            <Route path="planRenewal" element={<PlanRenewal />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
