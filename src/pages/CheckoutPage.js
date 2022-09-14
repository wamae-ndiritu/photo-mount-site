import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { saveAddress } from "../Redux/Actions/cartActions";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { customerAddress } = cart;

  const [display, setDisplay] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [addressContact, setAddressContact] = useState("");

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    dispatch(saveAddress(address, city, addressContact));
    setAddress("");
    setCity("");
    setAddressContact("");
    navigate("/placeorder");
  };

  useEffect(() => {
    if (customerAddress) {
      setAddress(customerAddress.address);
      setCity(customerAddress.city);
      setAddressContact(customerAddress.contact);
    }
  }, [customerAddress]);
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="container mt-4 mb-5">
          <div
            className="row d-flex justify-content-center mb-4"
            //   style={{ backgroundColor: "green" }}
          >
            <div className="col-sm-6 col-md-6 col-lg-6 sign-col mx-3 shadow-lg">
              <div className=" mt-4 sign-but-toggle">
                <h6
                  className={display ? `active` : ``}
                  onClick={() => setDisplay(!display)}
                >
                  Delivery
                </h6>
                <h6
                  className={display ? `` : `active`}
                  onClick={() => setDisplay(!display)}
                >
                  Collection
                </h6>
              </div>
              {display ? (
                <div className="">
                  <h5 className="text-center mt-3 h-title">Address Details</h5>
                  <p className="text-center checkout-text">
                    If you choose order delivery, then fill in the form below.
                  </p>
                  <form className="form mb-3">
                    <div className="mb-3 sign-div">
                      <label htmlFor="first-name" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="12-302 Nairobi"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 sign-div">
                      <label htmlFor="email" className="form-label">
                        City/Town/County
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Nairobi"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 sign-div">
                      <label htmlFor="first-name" className="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="0740924507"
                        value={addressContact}
                        onChange={(e) => setAddressContact(e.target.value)}
                      />
                    </div>
                    <div className="sign-div">
                      <button
                        className="btn submit-btn"
                        style={{ width: "100%" }}
                        onClick={handleSubmitAddress}
                      >
                        Select Delivery
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <h5 className="text-center mt-3 h-title">
                    Collection Deatils
                  </h5>
                  <p className="text-center checkout-text">
                    If you choose to collect your order at our shops, fill the
                    small form below.
                  </p>
                  <form className="form mb-3">
                    <div className="mb-3 sign-div">
                      <label htmlFor="email" className="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="0740924507"
                      />
                    </div>
                    <div className="sign-div">
                      <button
                        className="btn submit-btn"
                        style={{ width: "100%" }}
                      >
                        Select Collection
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
