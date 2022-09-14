import React from "react";
import sliderimg1 from "../Images/slider-img-1.jpeg";
import sliderimg2 from "../Images/slider-img-2.jpg";
import sliderimg3 from "../Images/slider-img-3.jpg";
import guarantee from "../Images/guarantee.png";
import VerifiedIcon from "@mui/icons-material/Verified";
const Heroe = () => {
  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div className="service-section shadow-lg">
          <div className="title-2 mt-2 text-center">
            <h1>Benefits to our customers</h1>
          </div>
          <ul className="d-flex flex-column justify-content-center">
            <li>
              <VerifiedIcon className="icon" />
              Quality Services
            </li>
            <li>
              <VerifiedIcon className="icon" />
              Affordable Charges
            </li>
            <li>
              <VerifiedIcon className="icon" />
              Customer satisfaction
            </li>
            <li>
              <VerifiedIcon className="icon" />
              Outstanding services
            </li>
            <li>
              <VerifiedIcon className="icon" />
              Free delivery in Nairobi
            </li>
            <li>
              <VerifiedIcon className="icon" />
              Small parcel fee across the country
            </li>
          </ul>
          <div className="guarantee-sect">
            <img src={guarantee} alt="mounting guarantee" />
          </div>
        </div>
        <div className="right-sect">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade slider shadow-sm"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={sliderimg1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={sliderimg2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={sliderimg3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="slogan text-center">
            <h2>We make your moments memorable!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroe;
