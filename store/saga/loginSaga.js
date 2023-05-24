
import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../type/logintype';

import { LOGIN_SUCCESS, LOGIN_ERROR } from '../type/logintype';
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

    
    if (response.status === 200) {
      
      localStorage.setItem('CurrentUser', JSON.stringify(response.data));
      localStorage.setItem('isLoggedIn', 'true');
      
      
      yield put({ type: LOGIN_SUCCESS, payload: response });
    } else {
      
      yield put({ type: LOGIN_ERROR, payload: 'Login failed' });
    }
  } catch (error) {
    console.log(error);
    
    yield put({ type: LOGIN_ERROR, payload: error.message });
  }
}

export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
}
