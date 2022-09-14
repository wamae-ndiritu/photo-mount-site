import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Message from "../Components/Loading/Error";
import Loading from "../Components/Loading/loading";
import { login, registerUser } from "../Redux/Actions/userActions";

const AccountPage = () => {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const {
    loading: loginLoading,
    error: loginError,
    userInfo: loginUserInfo,
  } = userLogin;

  const [display, setDisplay] = useState(false);
  const [viewLoginPass, setViewLoginPass] = useState(false);
  const [viewRegPass, setViewRegPass] = useState(false);

  const [username, setUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(username, regEmail, regPassword));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (userInfo || error) {
      setUsername("");
      setRegEmail("");
      setRegPassword("");
    } else if (loginUserInfo || loginError) {
      setLoginEmail("");
      setLoginPassword("");
    }
  }, [userInfo, error, loginUserInfo, loginError]);

  // useEffect(() => {
  //   console.log(window.performance.navigation.type);
  // }, []);

  return (
    <div>
      <Header />
      <div className=" container mt-4 mb-5">
        <div
          className="row d-flex justify-content-center mb-4"
          //   style={{ backgroundColor: "green" }}
        >
          <div className="col-sm-6 col-md-6 col-lg-6 sign-col mx-3 shadow-lg">
            {loading ? (
              <Loading />
            ) : (
              error &&
              isModalOpen && <Message variant="alert-danger">{error}</Message>
            )}
            {loginLoading ? (
              <Loading />
            ) : (
              loginError &&
              isModalOpen && (
                <Message
                  variant="alert-danger"
                  state={(isModalOpen, setIsModalOpen)}
                >
                  {loginError}
                </Message>
              )
            )}
            <div className=" mt-4 sign-but-toggle">
              <h6 className={display ? `active` : ``} onClick={toggleDisplay}>
                Sign Up
              </h6>
              <h6 className={display ? `` : `active`} onClick={toggleDisplay}>
                Sign In
              </h6>
            </div>
            {display ? (
              <div className="">
                <h5 className="text-center mt-3 h-title">Create Account</h5>
                <form className="form mb-3">
                  <div className="mb-3 sign-div">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="John"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 sign-div">
                    <label htmlFor="reg-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="reg-email"
                      placeholder="johndoe@gmail.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 sign-div">
                    <label htmlFor="first-name" className="form-label">
                      Password
                    </label>
                    <input
                      type={viewRegPass ? `text` : `password`}
                      className="form-control"
                      id="first-name"
                      placeholder="password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                    />
                  </div>
                  <div className="sign-div mb-3 d-flex align-items-center">
                    <i
                      className={
                        viewRegPass
                          ? `fa fa-eye eye-icon`
                          : `fa fa-eye-slash eye-icon`
                      }
                      onClick={() => setViewRegPass(!viewRegPass)}
                    ></i>
                    <p>Check Password</p>
                  </div>
                  <div className="sign-div">
                    {loading ? (
                      <button
                        className="loading-btn"
                        type="button"
                        style={{ width: "100%" }}
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm mx-3"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </button>
                    ) : (
                      <button
                        className="btn submit-btn"
                        style={{ width: "100%" }}
                        onClick={handleRegister}
                      >
                        Sign Up
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              <>
                <h5 className="text-center mt-3 h-title">Login</h5>
                <form className="form mb-3">
                  <div className="mb-3 sign-div">
                    <label htmlFor="email-1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-1"
                      placeholder="johndoe@gmail.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 sign-div">
                    <label htmlFor="pass" className="form-label">
                      Password
                    </label>
                    <input
                      type={viewLoginPass ? `text` : `password`}
                      className="form-control"
                      id="pass"
                      placeholder="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <div className="sign-div mb-3 d-flex align-items-center">
                    <i
                      className={
                        viewLoginPass
                          ? `fa fa-eye eye-icon`
                          : `fa fa-eye-slash eye-icon`
                      }
                      onClick={() => setViewLoginPass(!viewLoginPass)}
                    ></i>
                    <p>Check Password</p>
                  </div>
                  <div className="sign-div">
                    {loginLoading ? (
                      <button
                        className="loading-btn"
                        type="button"
                        style={{ width: "100%" }}
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm mx-3"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </button>
                    ) : (
                      <button
                        className="btn submit-btn"
                        style={{ width: "100%" }}
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
