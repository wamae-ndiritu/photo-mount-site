import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../Redux/Actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBarClicked, setIsBarClicked] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleMenu = () => {
    $("#menu-bar").toggleClass("show-menu");
    setIsBarClicked(!isBarClicked);
  };

  const handleLogout = (e) => {
    dispatch(logout());
    setIsLoggedOut(!isLoggedOut);
  };

  useEffect(() => {
    if ($(window).innerWidth() <= 768) {
      $("#header").addClass("z-index");
    }
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/account");
      window.location.reload();
    }
  }, [isLoggedOut, navigate]);
  return (
    <div className="container-fluid  my-4">
      <div className="header shadow-lg" id="header">
        <div className="logo-cont">
          <Link to="/">
            <img src={logo} alt="Nice Mounts Logo" />
          </Link>
        </div>
        <div className="menubar-cont">
          <ul id="menu-bar" className="hide-menu">
            <li>
              <Link to="/portfolio" className="d-flex align-items-center">
                <i
                  className="fa fa-clone header-icon-sm"
                  style={{ paddingRight: "2px" }}
                ></i>
                <p>Portfolio</p>
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="d-flex align-items-center">
                <i
                  className="fa fa-phone header-icon-sm"
                  style={{ paddingRight: "2px" }}
                ></i>
                <p>Contacts</p>
              </Link>
            </li>
            <li>
              <Link to="/account" className="d-flex align-items-center">
                <i
                  className="fa fa-user header-icon-sm"
                  style={{ paddingRight: "2px" }}
                ></i>
                <p>Account</p>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="d-flex align-items-center badge-cont">
                <i
                  className="fa fa-shopping-bag header-icon-sm"
                  style={{ paddingRight: "2px" }}
                ></i>
                {cartItems?.length >= 1 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                <p>Cart</p>
              </Link>
            </li>
            {userInfo && (
              <li onClick={handleLogout}>
                <p>Logout</p>
              </li>
            )}
          </ul>
          <Link to="/contacts">
            <button className="btn-main small-btn-main">Get Intouch</button>
          </Link>
          <div className="menu-icon">
            {isBarClicked ? (
              <CloseIcon className="bg-icon" onClick={handleMenu} />
            ) : (
              <MenuIcon className="bg-icon" onClick={handleMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
