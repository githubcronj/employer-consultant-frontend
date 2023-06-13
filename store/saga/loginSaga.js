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
      role: action.payload.role,
    };

    const response = yield call(makeApiRequest, {
      endpoint: "/login",
      method: "POST",
      data: payload,
    });

    if (response.status === 200) {
      localStorage.setItem("CurrentUser", JSON.stringify(response.data));
      localStorage.setItem("isLoggedIn", "true");
      console.log(response);

      yield put({ type: LOGIN_SUCCESS, payload: response });
      toast.success("Login successful");
    } else {
      yield put({ type: LOGIN_ERROR, payload: "Login failed" });
      toast.error(response.message);
    }
  } catch (error) {
    console.log(error);

    yield put({ type: LOGIN_ERROR, payload: error.message });
    toast.error(error.message);
  }
}

function* googleloginSaga(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/auth/login/success",
      method: "POST",
      data: action.payload,
    });

    if (response.status === 200) {
      yield put({ type: "GOOGLE_LOGIN_SUCCESS", payload: response.data });
    } else {
      yield put({ type: GOOGLE_LOGIN_ERROR, payload: " google Login failed" });
      toast.error(" google Login failed");
    }
  } catch (error) {
    console.log(error);

    yield put({ type: GOOGLE_LOGIN_ERROR, payload: error.message });
    toast.error(error.message);
  }
}

export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.GOOGLE_LOGIN, googleloginSaga);
}
