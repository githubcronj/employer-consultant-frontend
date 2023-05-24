import { all } from 'redux-saga/effects';
import watchLogin from "./loginSaga"
export default function* rootSaga() {
  yield all([
    watchLogin(),
  ]);
}
