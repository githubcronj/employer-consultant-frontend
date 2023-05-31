import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../type/logintype";

import { LOGIN_SUCCESS, LOGIN_ERROR } from "../type/logintype";
import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from "../type/logintype";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";

function* loginSaga(action) {
  try {
    const payload = {
      email: action.payload.email,
      password: action.payload.password,
      role:"employer"
    };

    const response = yield call(makeApiRequest, {
      endpoint: "/login",
      method: "POST",
      data: payload,
    });

    if (response.status === 200) {
      localStorage.setItem("CurrentUser", JSON.stringify(response.data));
      localStorage.setItem("isLoggedIn", "true");

      yield put({ type: LOGIN_SUCCESS, payload: response });
    } else {
      yield put({ type: LOGIN_ERROR, payload: "Login failed" });
      toast.error("Login failed");
    }
  } catch (error) {
    console.log(error);

    yield put({ type: LOGIN_ERROR, payload: error.message });
    toast.error("An error occurred");
  }
}

function* googleloginSaga(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/auth/google",
      method: "GET",
    });

    if (response.status === 200) {
      yield put({ type: "GOOGLE_LOGIN_SUCCESS", payload: response.data });
      window.location.href = "/auth/login/success";
    } else {
      yield put({ type: GOOGLE_LOGIN_ERROR, payload: " google Login failed" });
      toast.error(" google Login failed");
    }
  } catch (error) {
    console.log(error);

    yield put({ type: GOOGLE_LOGIN_ERROR, payload: error.message });
    toast.error("An error occurred");
  }
}

export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.GOOGLE_LOGIN, googleloginSaga);
}
