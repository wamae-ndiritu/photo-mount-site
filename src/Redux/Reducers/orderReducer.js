import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from "../Constants/orderConstants";

// CREATE ORDER

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CREATE_ORDER_FAIL:
      return {
        success: false,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
