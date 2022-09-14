import {
  ADD_TO_CART,
  INCREASE_CART_QUANTITY,
  REMOVE_FROM_CART,
  RESET_CART,
  SAVE_CUSTOMER_ADDRESS,
} from "../Constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], customerAddress: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartItem = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case INCREASE_CART_QUANTITY:
      const id = action.payload.id;
      const updatedCartItem = action.payload;
      const prevCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      return {
        ...state,
        cartItems: [...prevCartItems, updatedCartItem],
      };
    case SAVE_CUSTOMER_ADDRESS:
      return {
        ...state,
        customerAddress: action.payload,
      };
    case RESET_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
