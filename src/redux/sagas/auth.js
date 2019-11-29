
import { put } from "redux-saga/effects";
import axios from "./axios";

import * as actions from "../actions/index";

export function* checkUserLoginedSaga(action) {
 const token = yield localStorage.getItem("React_Demo_token");
 if(token) {
  yield put(actions.userLogined());
 }
}

export function* loginUserSaga(action) {
  const payload = {
    'email': action.email,
    'password': action.password,
    "returnSecureToken":true
  };
  let url = "accounts:signInWithPassword?key=AIzaSyAiog5vdKeK5z7vn14TKzKaeMQ7LQxev8o";
  try {
    const response = yield axios.post(url, payload);
    yield localStorage.setItem("React_Demo_token", response.data.idToken);
    yield put(actions.loginSuccess(response.data));
  } catch (error) {
    yield put(actions.loginFail(error.response.data));
  }
}

export function* registerUserSaga(action) {
  const payload = {
    'email': action.email,
    'password': action.password,
    "returnSecureToken":true
  };
  let url = "accounts:signUp?key=AIzaSyAiog5vdKeK5z7vn14TKzKaeMQ7LQxev8o";
  try {
    const response = yield axios.post(url, payload);
    yield localStorage.setItem("React_Demo_token", response.data.idToken);
    yield put(actions.registerSuccess(response.data));
  } catch (error) {
    yield put(actions.registerFail(error.response.data));
  }
}

export function* logoutUserSaga(action) {
    yield localStorage.removeItem("React_Demo_token");
}