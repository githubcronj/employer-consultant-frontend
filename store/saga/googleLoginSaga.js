// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as types from '../type/googleLoginType';
// import axios from 'axios';
// import { makeApiRequest } from '../../utils/api';
// import { toast } from 'react-toastify';
// // function* googleloginSaga(action) {
// //   try {

// //     const response = yield call(makeApiRequest, {
// //       endpoint: '/auth/google',
// //       method: 'GET',

// //     });

// //     if (response.status === 200) {
// //        yield put({ type: 'GOOGLE_LOGIN_SUCCESS', payload: response.data });
// //       window.location.href = '/auth/login/success';
// //     } else {

// //       yield put({ type: GOOGLE_LOGIN_ERROR, payload: ' google Login failed' });
// //       toast.error(' google Login failed');
// //     }
// //   } catch (error) {
// //     console.log(error);

// //     yield put({ type: GOOGLE_LOGIN_ERROR, payload: error.message });
// //     toast.error('An error occurred');
// //   }
// // }

// function* googleLoginSaga() {
//     yield takeLatest('GOOGLE_LOGIN', function* () {
//       // Perform any pre-login logic here

//       // Open the Google login URL
//       window.open(`http://localhost:8080/auth/google/callback`, '_self');

//       // Perform any post-login logic here
//     });
//   }

//   function* googleLoginRedirectSaga() {
//     yield takeLatest('GOOGLE_LOGIN_REDIRECT', function* () {

//       try {
//         const url = `http://localhost:8080/auth/login/success`;
//         const response = yield call(axios.get, url, { withCredentials: true });
//         yield put({ type: types.GOOGLE_LOGIN_SUCCESS, payload: response.data.user });

//         window.location.href = '/profile';
//       } catch (error) {
//         yield call(toast.error, 'Something went wrong');
//       } finally {

//       }
//     });
//   }
//   export default function* watchGoogleLogin() {

//     yield takeLatest(types.GOOGLE_LOGIN,googleLoginSaga);
//     yield takeLatest(types.GOOGLE_LOGIN_REDIRECT,googleLoginRedirectSaga);
//   }
