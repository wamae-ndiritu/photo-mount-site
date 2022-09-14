import React from "react";
import { useSelector } from "react-redux";
import userIcon from "../Images/user.jfif";
import locationIcon from "../Images/location.jfif";
import cartIcon from "../Images/cart.jpg";

const OrderInfo = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="container mb-4 order-info-sect">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-center order-info">
          <div className="user-info-cont">
            <img src={userIcon} alt="..." />
          </div>
          <div className="d-flex user-info-text">
            <h6 className="text-center">Customer</h6>
            <h6 className="text-center">{userInfo.username}</h6>
            <p className="text-center">{userInfo.email}</p>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-center order-info">
          <div className="user-info-cont">
            <img src={cartIcon} alt="..." />
          </div>
          <div className="d-flex user-info-text">
            <h6 className="text-center">Order Info</h6>
            <p className="text-center">wamaejoseph392@gmail.com</p>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-center order-info">
          <div className="user-info-cont">
            <img src={locationIcon} alt="..." />
          </div>
          <div className="d-flex user-info-text">
            <h6 className="">Address</h6>
            <p className="text-center">99-10102, Nairobi</p>
            <p className="">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
