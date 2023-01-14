import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MessPage from "./pages/mess/Mess.jsx";
import ViewMess from "./pages/mess/ViewMess.jsx";
import AddMess from "./pages/mess/AddMess.jsx";
import UpdateMess from "./pages/mess/UpdateMess.jsx";
import DeleteMess from "./pages/mess/DeleteMess.jsx";
import UpdateCustomer from "./pages/customer/UpdateCustomer.jsx";
import ViewCustomer from "./pages/customer/ViewCustomer.jsx";
import AddCustomer from "./pages/customer/AddCustomer.jsx";
import DeleteCustomer from "./pages/customer/DeleteCustomer.jsx";
import SendOtp from "./pages/customer/SendOtp.jsx";
import ValidateOtp from "./pages/customer/ValidateOtp.jsx";
import PlanRenewal from "./pages/customer/PlanRenewal.jsx";
import CustomerPage from "./pages/customer/Customer.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/mess" element={<MessPage />}>
        <Route path="view" element={<ViewMess />} />
        <Route path="add" element={<AddMess />} />
        {/* <Route path="update" element={<UpdateMess />} /> */}
        {/* <Route path="delete" element={<DeleteMess />} /> */}

        <Route path="customer">
          <Route path="view" element={<ViewCustomer />} />
          <Route path="add" element={<AddCustomer />} />
          <Route path="update" element={<UpdateCustomer />} />
          <Route path="delete" element={<DeleteCustomer />} />
          <Route path="sendOtp" element={<SendOtp />} />
          <Route path="validateOtp" element={<ValidateOtp />} />
          <Route path="planRenewal" element={<PlanRenewal />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
