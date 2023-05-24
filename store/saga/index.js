import { all } from "redux-saga/effects";
import watchRegister from "./registerSaga";
// import {watchLogin} from "../saga/loginSaga"
export default function* rootSaga() {
  yield all([
    // watchLogin(),
    watchRegister()
  ]);
}
