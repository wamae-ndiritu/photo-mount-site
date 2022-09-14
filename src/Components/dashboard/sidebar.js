import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="">
      <div className="dash-logo">
        <img src={logo} alt="..." />
        <h6>ADMIN DASHBOARD</h6>
      </div>
      <div className="dash-menu">
        <Link to="/" className="dash-link">
          <HomeIcon />
          Home
        </Link>
      </div>
      <div className="dash-menu my-3">
        <h6 className="text-center">Orders</h6>
        <Link to="/" className="dash-link">
          <HomeIcon />
          ORDERS
        </Link>
        <Link to="/" className="dash-link">
          <HomeIcon />
          ORDERS
        </Link>
        <Link to="/" className="dash-link">
          <HomeIcon />
          ORDERS
        </Link>
        <Link to="/" className="dash-link">
          <HomeIcon />
          ORDERS
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
