import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registerUserReducer, userLoginReducer } from "./Reducers/userReducers";
import { cartReducer } from "./Reducers/cartReducers";
import { orderReducer } from "./Reducers/orderReducer";

const reducers = combineReducers({
  userRegister: registerUserReducer,
  userLogin: userLoginReducer,
  cart: cartReducer,
  orderCreate: orderReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const customerAddressFromLocalStorage = localStorage.getItem("customerAddress")
  ? JSON.parse(localStorage.getItem("customerAddress"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  cart: {
    cartItems: cartItemsFromLocalStorage,
    customerAddress: customerAddressFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
