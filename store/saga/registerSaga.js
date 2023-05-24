import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../type/registerType";
import api from "../../utils/api";
import { useRouter } from "next/router";

export default function* watchRegister() {
  yield takeLatest(types.REGISTER_REQUEST, register);
}
function* register(action) {
  try {
    const { history } = action.payload;
    const response = yield call(api.post, "/register", action.payload);
    yield put({ type: types.REGISTER_SUCCESS, payload: response.data });
    yield put(push("/home"));
          
  } catch (error) {
    yield put({ type: types.REGISTER_ERROR, payload: error.message });
  }
}