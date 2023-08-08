// EmployerLayout.jsx
import React from "react";
import { Navbar } from "Components/Navbar/Navbar";
import { SideBar } from "Components/Sidebar/sideBar";

function EmployerLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <SideBar />
      {children}
    </div>
  );
}

export default EmployerLayout;
