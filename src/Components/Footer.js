import React from "react";
import logo from "../Images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
// import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="mt-3 container-fluid footer">
      <div className="row py-3 mx-2">
        <div className="col-sm-6 col-md-4 col-lg-3 footer-logo">
          <img src={logo} alt="nice mount logo" />
          <div className="footer-location-text">
            <p>Photography</p>
            <p>Photo framing</p>
            <p>Photo mounting</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="title-2 footer-titles">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <h1>Location</h1>
          </div>
          <div className="footer-location-text">
            <p>Shop 12K, Business Center</p>
            <p>Along Luthuli Avenue, Nairobi</p>
            <p>Kenya</p>
          </div>
          <div className="title-2 footer-titles">
            <i className="fa fa-phone"></i>
            <h1>Support Contact</h1>
          </div>
          <div className="footer-location-text">
            <p>+254 740 924 507</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="title-2">
            <h1>Follow Us On</h1>
          </div>
          <div className="social-icons mb-3">
            <div className="footer-social-icon">
              <FacebookIcon style={{ fontSize: "18px" }} />
            </div>
            <div className="footer-social-icon">
              <InstagramIcon style={{ fontSize: "18px" }} />
            </div>
            <div className="footer-social-icon">
              <WhatsAppIcon style={{ fontSize: "18px" }} />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column">
          <div className="title-2 footer-titles">
            <i className="fa fa-envelope-o"></i>
            <h1>Subscribe to our Newsletter</h1>
          </div>
          <div className="d-flex mb-2">
            {/* <EmailIcon className="mail-icon" /> */}
            <input
              type="text"
              placeholder="your email..."
              className="mail-input"
              id="email"
            />
          </div>
          <div className="button-cont">
            <button className="btn-main-1">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
