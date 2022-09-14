import React from "react";
import Sidebar from "../Components/dashboard/sidebar";

const DashboardPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="dash-container">
        <div className="dash-sidebar">
          <Sidebar />
        </div>
        <div className="dash-main">Main</div>
      </div>
    </div>
  );
};

export default DashboardPage;
