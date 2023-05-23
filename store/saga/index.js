import { all } from 'redux-saga/effects';
import {watchLogin} from "../saga/loginSaga"
export default function* rootSaga() {
  yield all([
    watchLogin(),
  ]);
}
