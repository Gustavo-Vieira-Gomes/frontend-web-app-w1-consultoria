import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Ativos from "../pages/Ativos";
import Passivos from "../pages/Passivos";
import PassivoDetailsPage from "../pages/PassivoDetailsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/ativos" element={<Ativos />} />
      <Route path="/passivos" element={<Passivos />} />
      <Route path="/passivos/details" element={<PassivoDetailsPage />} />

    </Routes>
  );
};

export default AppRoutes;
