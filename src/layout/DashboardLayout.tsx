import React from "react";
import Header from "../components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
