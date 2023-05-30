
import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../type/logintype';

import { LOGIN_SUCCESS, LOGIN_ERROR } from '../type/logintype';
import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from '../type/logintype';

import { makeApiRequest } from '../../utils/api';
import { toast } from 'react-toastify';

function* loginSaga(action) {
  try {
    const payload = {
      email: action.payload.email,
      password: action.payload.password,
      role:action.payload.role,
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
      toast.success('Login successful', { autoClose: 3000 });
    } else {
      
      yield put({ type: LOGIN_ERROR, payload: 'Login failed' });
      toast.error('Login failed'); 
    }
  } catch (error) {

    console.log(error);
    
    yield put({ type: LOGIN_ERROR, payload: error.message });
    toast.error('An error occurred'); 
  }
}

// function* googleloginSaga(action) {
//   try{
//     yield call(makeApiRequest, {
//       endpoint: `/auth/login/success/${action.payload.role}`,
//       method: 'GET',
    
//     });
//   }catch(error){
//     toast.error('An error occurred'); 
//   }
 
   

 
// }
function* googleloginSaga(action) {
  try {
    yield call(makeApiRequest, {
      endpoint: `/auth/login/success?role=${action.payload.role}`,
      method: 'GET',
    });
    yield put({ type: GOOGLE_LOGIN_SUCCESS});
   
  } catch (error) {
    
    yield put({ type: GOOGLE_LOGIN_ERROR, payload: error.message });
    toast.error('An error occurred');
  }
}

export default function* watchLogin() {
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.GOOGLE_LOGIN,googleloginSaga);
}
