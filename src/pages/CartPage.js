import React from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import { cartItems } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { increaseCartQty, removeFromCart } from "../Redux/Actions/cartActions";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // console.log(cartItems.sort((a, b) => a.id - b.id));

  // const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
  const total = cartItems
    .reduce((a, i) => a + i.quantity * i.price, 0)
    .toFixed(2);

  const handlCheckout = () => {
    if (userInfo) {
      navigate("/checkout");
    } else {
      navigate("/account");
    }
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQty = (type, cartItem) => {
    const { id, quantity } = cartItem;
    if (type === "inc") {
      const qty = Number(quantity) + 1;
      dispatch(increaseCartQty(id, qty));
    } else if (type === "dec") {
      if (quantity > 1) {
        const qty = Number(quantity) - 1;
        dispatch(increaseCartQty(id, qty));
      } else {
        dispatch(removeFromCart(id));
      }
    }
  };

  // useEffect(() => {
  //   setItems(cartItems);
  // }, []);

  return (
    <div>
      <Header />
      {/* <div className=""> */}
      {cartItems.length >= 1 ? (
        <div
          className={
            $(window).innerWidth() <= 400
              ? `row mx-2`
              : `container my-4 d-flex justify-content-center`
          }
        >
          <div className="col-sm-8 col-md-8 col-lg-8 d-flex justify-content-center">
            <table className="cart-table">
              <thead className="mt-3">
                <tr className="cart-table-row">
                  <th scope="col" className="col-3">
                    Product
                  </th>
                  <th scope="col" className="col-3">
                    Description
                  </th>
                  <th scope="col" className="col-3">
                    Quantity
                  </th>
                  <th scope="col" className="col-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="px-3">
                {cartItems
                  .sort((a, b) => b.id - a.id)
                  .map((cartItem) => {
                    const {
                      id,
                      photoName,
                      size,
                      price,
                      photoUrl,
                      quantity,
                      description,
                    } = cartItem;
                    return (
                      <tr className="table-row" key={id}>
                        <td className="col-3">
                          <div className="cart-image-cont">
                            <img src={photoUrl} alt={photoName} />
                          </div>
                        </td>
                        <td className="col-3">
                          <h6 className="text-center cart-text-title">
                            Size Name {photoName}
                          </h6>
                          <p className="text-center cart-text">
                            Size <span className="size-text">{size}</span>
                          </p>
                          <p className="text-center cart-text">{description}</p>
                        </td>
                        <td className="col-3">
                          <div className="cart-qty mx-3">
                            <i
                              className="fa fa-chevron-up qty-icon"
                              onClick={() => handleQty("inc", { ...cartItem })}
                              style={{ margin: "auto" }}
                            ></i>
                            <p style={{ margin: "auto" }}>{quantity}</p>
                            <i
                              className="fa fa-chevron-down qty-icon"
                              onClick={() => handleQty("dec", { ...cartItem })}
                              style={{ margin: "auto" }}
                            ></i>
                          </div>
                        </td>
                        <td className="col-3">
                          <div>
                            <h6 className="price-text">KES {price}</h6>
                            <div
                              className="d-flex align-items-center"
                              onClick={() => removeItemFromCart(`${id}`)}
                            >
                              <i className="fa fa-trash-o delete-icon"></i>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                Remove
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 mb-5 total-cont">
            <h6 className="mt-4 text-center">CART TOTALS</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>KES {total}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>KES 0.0</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>KES {total}</td>
                </tr>
              </tbody>
            </table>
            <div className="mb-3">
              <Link to="/">
                <button
                  className="btn submit-btn"
                  style={{ width: "100%", backgroundColor: "#000000" }}
                  onClick={handlCheckout}
                >
                  Add More Items
                </button>
              </Link>
            </div>
            <div className="mb-4">
              <button
                className="btn submit-btn"
                style={{ width: "100%" }}
                onClick={handlCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ height: "60vh" }}
        >
          <div className="alert alert-success">Your cart is empty!</div>
        </div>
      )}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default CartPage;
