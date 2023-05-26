import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../type/forgotPasswordtype';

import {FORGOT_PASSWORD,FORGOT_PASSWORD_ERROR,FORGOT_PASSWORD_SUCCESS } from '../type/forgotPasswordtype';
import {resetPasswordSuccess ,resetPasswordError } from "../action/forgetPasAction";
import { makeApiRequest } from '../../utils/api';
import { toast } from 'react-toastify';

 function* forgotpasSaga (action){
    try{
        const payload = {
            email : action.payload.email,
        }
        const response = yield call(makeApiRequest, {
            endpoint: '/forgot-password',
            method: 'POST',
            data: payload,
          });
          if (response.status === 200) {
            
            
            yield put({ type:FORGOT_PASSWORD_SUCCESS, payload: {
              token: response.token.accessToken,
            }, });
          } else {
            
            yield put({ type: FORGOT_PASSWORD_ERROR, payload: 'something went wrong' });
            toast.error('something went wrong'); 
          }
        } catch (error) {
          console.log(error);
          
          yield put({ type: FORGOT_PASSWORD_ERROR, payload: error.message });
          toast.error('An error occurred'); 
        }
    }

  
    

    function* resetPasswordSaga(action) {
      try {
        const payload = {
          token: action.payload.token,
          newPassword: action.payload.newPassword,
        };
        const endpoint = `/reset-password?token=${encodeURIComponent(action.payload.token)}`;
        const response = yield call(makeApiRequest, {
          endpoint,
          method: 'PUT',
          data: payload,
        });
    
        if (response.status === 200) {
          yield put({ type:types.RESET_PASSWORD_SUCCESS, payload: response.data });
       
         
        } else {
          yield put({ type:types.RESET_PASSWORD_ERROR, payload: 'something went wrong' });
      
          toast.error('something went wrong');
        }
      } catch (error) {
        console.log(error);
        yield put({ type:types.RESET_PASSWORD_ERROR, payload: error.message });
      
        toast.error('An error occurred'); 
      }
    }
    



    export default function* watchforgotpasSaga() {
        yield takeLatest(types.FORGOT_PASSWORD, forgotpasSaga);
        yield takeLatest(types.RESET_PASSWORD,resetPasswordSaga)
      }