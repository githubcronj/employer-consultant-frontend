import { call, put, takeEvery } from "redux-saga/effects";
import { setFormData, submitFormData } from "store/action/editProfileAction";
import * as types from '../type/editProfileType';

import { makeApiRequest } from "../../utils/api";

export const fetchProfileFormData = async () => {
  const accessToken = localStorage.getItem('CurrentUser');
  const token = JSON.parse(accessToken);
  console.log('toke',token)
  return await fetch("http://localhost:3001/employer/profile",
  {
    headers:{
      Authorization: `Bearer ${token.token.accessToken}`,
    }
  })
  
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('errorr')
        throw new Error("Request failed with status code: " + response.status);
      }
    })
    .catch(error => {
      throw new Error("API request failed: " + error.message);
    });
};
function* fetchFormDataSaga() {
  let data = yield call(fetchProfileFormData); 
  console.log('data',data)
  yield put({ type: types.SET_FORM_SUCCESS, payload: data });
}
function* submitEditFormData(action) {
 
  console.log('in saga',action.payload.accessToken)
  const data = {
    companyName: action.payload.companyName,
  industryType: action.payload.industryType,
  // companyId: action.payload.companyId,
  companyWebsiteUrl: action.payload.companyWebsiteUrl,
  email: action.payload.email,
  aboutCompany: action.payload.aboutCompany,
  companySize: action.payload.companySize,
  companyLocation: action.payload.companyLocation,
  companyFoundedDate: action.payload.companyFoundedDate,

  }
try {
  
  const response = yield call(makeApiRequest, {
      endpoint: '/employer/profile',
      method: 'PUT',

      data: data,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
    });
  // yield put(profileSaveSuccess(response.data));
  yield put({ type: PROFILE_EDIT_SUCCESS, payload: response.data });
  console.log('test in saga',response.data)
} catch (error) {
  console.log('API call error:', error);
  // yield put(profileSaveFailure(error));
  yield put({ type: PROFILE_EDIT_FAILURE, payload: error });

}
}


export default function* watchFetchFormData() {
  yield takeEvery(types.FETCH_FORM_DATA, fetchFormDataSaga);
  yield takeEvery(types.SUBMIT_FORM_DATA, submitEditFormData);
}