import React from "react";
import "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/landingpage/auth/Signup/Signup";
import Signin from "./pages/landingpage/auth/Signin/Signin";
import Dashboard from "./pages/user/dashboard/Dashboard";
import LandingPage from "./pages/landingpage/LandingPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
