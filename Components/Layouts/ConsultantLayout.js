// ConsultantLayout.jsx
import React from "react";
import { Navbar } from "Components/Navbar/Navbar";
import { SideBar } from "Components/Sidebar/sideBar";

function ConsultantLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}

export default ConsultantLayout;
