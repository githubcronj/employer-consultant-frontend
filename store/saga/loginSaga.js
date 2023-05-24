import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../type/logintype';
import { makeApiRequest } from '../../utils/api';

function* loginSaga(action) {
  try {
    const payload = {
      email: action.payload.email,
      password: action.payload.password,
    };

    
    const response = yield call(makeApiRequest, {
      endpoint: '/login',
      method: 'POST',
      data: payload,
    });
    yield put({ type: types.LOGIN_SUCCESS, payload: response });

  } catch (error) {
    console.log(error); 
    yield put({ type: types.LOGIN_ERROR, payload: error.message });
  }
}


export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
}
