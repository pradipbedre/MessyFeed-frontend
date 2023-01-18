import React from "react";
import "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import PivateRoutes from "./utils/ProtectedRoutes";
import LandingPage from "./pages/landingpage/LandingPage";
import Signup from "./pages/landingpage/auth/Signup/Signup";
import Signin from "./pages/landingpage/auth/Signin/Signin";
import MessList from "./components/user/messList/MessList";
import MessDetails from "./components/user/messDetails/MessDetails";
/* DL */
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
import UserPage from "./pages/user/User";
import ShowCustomer from "./pages/customer/ShowCustomer.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        {/* Private Routes */}
        <Route element={<PivateRoutes />}>
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
        </Route>
        {/* Public Routes */}
        <Route path="/messList" element={<MessList />} />
        <Route exact path="/messList/:id" element={<MessDetails />} />
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
