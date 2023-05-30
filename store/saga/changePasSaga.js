import { takeLatest, call, put,select  } from 'redux-saga/effects';


import { CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS } from '../type/changePasword';
import { makeApiRequest } from '../../utils/api';

import * as types from '../type/changePasword';


import { toast } from 'react-toastify';

function* changePasswordSaga(action) {
  try {
    // Get the token from the Redux state
    const token = yield select(state => state.auth.token);
    
    // Combine the token and action payload
    const requestData = {
      token,
      ...action.payload,
    };
    
    const response = yield call(makeApiRequest, {
      endpoint: '/change-password',
      method: 'POST',
      data: requestData, 
    });

    if (response.status === 200) {
      yield put({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: response.data, 
      });
    } else {
      yield put({ type: CHANGE_PASSWORD_ERROR, payload: 'Something went wrong' });
      toast.error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    yield put({ type: CHANGE_PASSWORD_ERROR, payload: error.message });
    toast.error('An error occurred');
  }
}




export default function* watchChangePasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
}
