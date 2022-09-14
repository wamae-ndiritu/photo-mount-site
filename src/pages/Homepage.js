import React from "react";
import Header from "../Components/Header";
import Heroe from "../Components/Heroe";
import Services from "../Components/Services";
import DistinguishedServices from "../Components/DistinguishedServices";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Heroe />
      <Services />
      <DistinguishedServices />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Homepage;
