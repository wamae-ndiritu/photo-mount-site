import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OrderInfo from "../Components/orderInfo";
import Orders from "../Components/orders";

const PlaceOrderPage = () => {
  return (
    <div>
      <Header />
      <OrderInfo />
      <Orders />
      <Footer />
    </div>
  );
};

export default PlaceOrderPage;
