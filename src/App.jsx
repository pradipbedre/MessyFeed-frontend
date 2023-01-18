import React from "react";;
import AppRoutes from './AppRoutes';
import "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import PivateRoutes from "./utils/ProtectedRoutes";
import LandingPage from "./pages/landingpage/LandingPage";
import Signup from "./pages/landingpage/auth/Signup";
import Signin from "./pages/landingpage/auth/Signin/Signin";
import DashboardPage from "./pages/user/dashboard/DashboardPage";
import MessList from "./components/user/messList/MessList";
import MessDetails from "./components/user/messDetails/MessDetails";
const App = () => {
  return (
    <div>
      <Routes>
        {/* Private Routes */}
        <Route element={<PivateRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
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
