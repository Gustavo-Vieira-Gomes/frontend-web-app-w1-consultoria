import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import CadastroPage from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  );
};

export default AppRoutes;
