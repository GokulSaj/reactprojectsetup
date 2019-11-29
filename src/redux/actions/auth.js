import * as actionTypes from "./actionTypes";

// Check if User logined
export const checkUserLogined = () => {
  return {
    type: actionTypes.CHECK_USER_LOGINED
  };
};
export const userLogined = () => {
  return {
    type: actionTypes.USER_LOGINED
  };
};

// Login
export const loginSuccess = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    response: response
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};

export const login = (data) => {
  return {
    type: actionTypes.LOGIN_USER,
    email: data.email,
    password: data.password
  };
};

// Register
export const registerSuccess = (response) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    response: response
  };
};

export const registerFail = error => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error
  };
};

export const register = (data) => {
  return {
    type: actionTypes.REGISTER_USER,
    email: data.email,
    password: data.password
  };
};

// Logout
export const logout = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};