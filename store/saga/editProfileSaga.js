import { call, put, takeEvery } from "redux-saga/effects";
import { setFormData } from "store/action/editProfileAction";
import * as types from '../type/editProfileType';

import { makeApiRequest } from "../../utils/api";

function* fetchFormDataSaga() {
  try {
    // Make an API call or retrieve data from a source

    const response = yield call(makeApiRequest, {
        endpoint: '/employer/profile',
        method: 'GET',
        // data: data,
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.accessToken}`,
        },});
        console.warn(response);

    // Dispatch an action to set the form data
    // yield put(setFormData(formData));
    yield put({ type: types.SET_FORM_SUCCESS, payload: response.data });
  } catch (error) {
    // Handle error if necessary
  }
}

export default function* watchFetchFormData() {
  yield takeEvery(types.FETCH_FORM_DATA, fetchFormDataSaga);
}