import React from "react";
import "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Signup from "./pages/landingpage/auth/Signup/Signup";
import Signin from "./pages/landingpage/auth/Signin/Signin";
import DashboardPage from "./pages/user/dashboard/DashboardPage";
import MessProfilePage from "./pages/user/mess_profile/MessProfilePage";
import UserProfilePage from "./pages/user/user_profile/UserProfilePage";
import AddNewCustomerPage from "./pages/user/add_new_customer/AddNewCustomerPage";
import ViewAllCustomerPage from "./pages/user/view_all_customer/ViewAllCustomerPage";
import MealCouponPage from "./pages/user/meal_coupon/MealCouponPage";
import RenewCustomerPage from "./pages/user/renew_customer/RenewCustomerPage";
import UpdateProfile from "./components/user/updateProfile/UpdateProfile";
import UpadateMess from "./components/user/updateMess/UpadateMess";
import ValidateOtp from "./components/user/validateOtp/ValidateOtp";
import CustomerDetails from "./components/user/customerDetails/CustomerDetails";
import UpdateCustmer from "./components/user/updateProfile/UpdateProfile";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/messProfile" element={<MessProfilePage />} />
        <Route path="/dashboard/messProfile/update" element={<UpadateMess />} />
        <Route path="/dashboard/userProfile" element={<UserProfilePage />} />
        <Route
          path="/dashboard/userProfile/update"
          element={<UpdateProfile />}
        />
        <Route
          path="/dashboard/addNewCustomer"
          element={<AddNewCustomerPage />}
        />
        <Route
          path="/dashboard/viewAllCustomer"
          element={<ViewAllCustomerPage />}
        />
        <Route
          path="/dashboard/viewAllCustomer/viewCustomer"
          element={<CustomerDetails />}
        />
        <Route
          path="/dashboard/viewAllCustomer/updateCustomer/update"
          element={<UpdateCustmer />}
        />
        <Route path="/dashboard/mealCoupon" element={<MealCouponPage />} />
        <Route
          path="/dashboard/mealCoupon/validateOtp"
          element={<ValidateOtp />}
        />
        <Route
          path="/dashboard/renewCustomer"
          element={<RenewCustomerPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
