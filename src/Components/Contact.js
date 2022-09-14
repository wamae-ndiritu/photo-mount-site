import React from "react";
import $ from "jquery";

const Contact = () => {
  return (
    <>
      <div className="row my-4">
        <h5 className="text-center">Contact Us</h5>
      </div>
      <div className="container my-4 d-flex justify-content-center">
        <div
          className={
            $(window).innerWidth() <= 576
              ? `row px-3 d-flex justify-content-center`
              : `col-8 px-3 d-flex justify-content-center`
          }
        >
          <div className="col-md-5 col-lg-5 col-10 m-3">
            <h6 className="h-title">Social Media Handles</h6>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-phone contact-icon"></i>
                <p className="title-heading">Call Us</p>
              </div>
              <p className="handle-text">+254740924507</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i className="fa fa-envelope-o contact-icon"></i>
                <p className="title-heading">Email</p>
              </div>
              <p className="handle-text">wamaejoseph392@gmail.com</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-whatsapp contact-icon"
                  style={{ color: "green" }}
                ></i>
                <p className="title-heading">Whatsapp</p>
              </div>
              <p className="handle-text">+254769127907</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-facebook-square contact-icon"
                  style={{ color: "blue" }}
                ></i>
                <p className="title-heading">Facebook</p>
              </div>
              <p className="handle-text">Wamae Ndiritu</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-instagram contact-icon"
                  style={{ color: "purple" }}
                ></i>
                <p className="title-heading">Instagram</p>
              </div>
              <p className="handle-text">wamae_11</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-twitter-square contact-icon "
                  style={{ color: "blue" }}
                ></i>
                <p className="title-heading">Twitter</p>
              </div>
              <p className="handle-text">@wamae_wa</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-10 m-3">
            <h6 className="h-title">Inquiries</h6>
            <form className="form">
              <div className="mb-3">
                <label htmlFor="first-name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  type="text"
                  rows="4"
                  style={{ width: "80%" }}
                  className="form-control"
                  id="message"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
