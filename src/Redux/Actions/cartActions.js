import {
  ADD_TO_CART,
  INCREASE_CART_QUANTITY,
  REMOVE_FROM_CART,
  RESET_CART,
  SAVE_CUSTOMER_ADDRESS,
} from "../Constants/cartConstants";

export const addToCart =
  (id, photoName, photoUrl, size, quantity, price, description) =>
  (dispatch, getState) => {
    // console.log(id, photoName, photoUrl, size, quantity, price, description);
    dispatch({
      type: ADD_TO_CART,
      payload: { id, photoName, photoUrl, size, quantity, price, description },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (id) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);

  dispatch({ type: REMOVE_FROM_CART, payload: newCartItems });

  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};

//INCREASE OR DECREASE CART QUANTITY
export const increaseCartQty = (id, qty) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  // const prevCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  const newCartItem = cartItems.find((cartItem) => cartItem.id === id);

  // console.log({ ...newCartItem, quantity: qty });

  const item = { ...newCartItem, quantity: qty };

  dispatch({ type: INCREASE_CART_QUANTITY, payload: item });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE CUSTOMER ADDRESS

export const saveAddress = (address, city, contact) => (dispatch) => {
  dispatch({
    type: SAVE_CUSTOMER_ADDRESS,
    payload: { address, city, contact },
  });

  localStorage.setItem(
    "customerAddress",
    JSON.stringify({ address, city, contact })
  );
};

// DELETE CART
export const resetCart = () => (dispatch, getState) => {
  dispatch({ type: RESET_CART });

  localStorage.removeItem("cartItems");
};
