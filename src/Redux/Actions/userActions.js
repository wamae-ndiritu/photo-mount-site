import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/userConstants";
import axios from "axios";
import { URL } from "../../url";

//REGISTER

export const registerUser = (username, email, password) => async (dispatch) => {
  console.log(username, email, password);
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URL}/api/user/`,
      {
        username,
        email,
        password,
      },
      config
    );

    if (!data.message) {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGIN
export const login = (email, password) => async (dispatch) => {
  console.log(URL);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URL}/api/user/login`,
      { email, password },
      config
    );

    if (!data.message) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT

export const logout = () => (dispatch, getState) => {
  dispatch({ type: USER_LOGOUT });

  localStorage.removeItem("userInfo");
};
