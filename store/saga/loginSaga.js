import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../type/logintype';
import api from '../../utils/api'; // Replace with the correct path to your api file

// Worker saga for handling the login request
function* loginSaga(action) {
  try {
    const response = yield call(api.post, '/login', action.payload); // Make the login request using the api
    yield put({ type: types.LOGIN_SUCCESS, payload: response.data }); // Dispatch the login success action with the response data
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error.message }); // Dispatch the login error action with the error message
  }
}

// Watcher saga that listens for the login action
export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
}

