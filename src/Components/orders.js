import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../Redux/Actions/cartActions";
import { createOrder } from "../Redux/Actions/orderActions";
import Loading from "../Components/Loading/loading";
import Message from "./Loading/Error";
// import A1 from "../Images/A1.jpg";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems, customerAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, error, success } = orderCreate;

  const total = cartItems
    .reduce((a, i) => a + i.quantity * i.price, 0)
    .toFixed(2);

  const totalPrice = total + 0.0;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cartItems,
        customerAddress,
        totalPrice,
        user: userInfo,
      })
    );
  };

  useEffect(() => {
    if (success) {
      dispatch(resetCart());
      navigate("/");
    }
  }, [success, dispatch, navigate]);

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-8 col-lg-8">
          {cartItems.map((cartItem) => {
            const {
              id,
              photoName,
              photoUrl,
              quantity,
              price,
              size,
              description,
            } = cartItem;
            return (
              <div className="d-flex" key={id}>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="cart-image-cont mt-2">
                    <img src={photoUrl} alt={photoName} />
                  </div>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center order-desc-text">
                  <h6 className="text-center cart-text-title">
                    Size Name {photoName}
                  </h6>
                  <p className="text-center cart-text">
                    Size <span className="size-text">{size}</span>
                  </p>
                  <p className="text-center cart-text">{description}</p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <p>Qty {quantity}</p>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <h6 className="price-text">KES {price}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-3 col-lg-3">
          {loading ? (
            <Loading />
          ) : (
            error && <Message variant="alert-danger">{error}</Message>
          )}
          <table className="table table-bordered mt-3">
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
            <button
              className="btn submit-btn"
              style={{ width: "100%", backgroundColor: "#000000" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
