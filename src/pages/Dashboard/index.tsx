// src/pages/Dashboard/index.tsx
import React from "react";
import MenuLateral from "../../components/MenuLateral";

const Dashboard: React.FC = () => (
  <div style={{ display: "flex" }}>
    <MenuLateral />
    <main style={{ flex: 1, padding: "24px" }}>
      {/* Conteúdo da dashboard */}
    </main>
  </div>
);

export default Dashboard;
