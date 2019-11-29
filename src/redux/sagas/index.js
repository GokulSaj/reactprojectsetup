
import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import {
    checkUserLoginedSaga,
    loginUserSaga,
    registerUserSaga,
    logoutUserSaga
} from "./auth";

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.CHECK_USER_LOGINED, checkUserLoginedSaga),
        takeEvery(actionTypes.LOGIN_USER, loginUserSaga),
        takeEvery(actionTypes.REGISTER_USER, registerUserSaga),
        takeEvery(actionTypes.LOGOUT_USER, logoutUserSaga),
    ]);
}

