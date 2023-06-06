import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../type/editJobPostType";
import { JOB_EDIT_FAILURE, JOB_EDIT_SUCCESS } from "store/type/editJobPostType";

import { makeApiRequest } from "../../utils/api";

export const fetchJobFormData = () => {
  const accessToken = localStorage.getItem("CurrentUser");
  const token = JSON.parse(accessToken);
  console.log("toke", token);
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/job/${action.payload.id.id}`,
    {
      headers: {
        Authorization: `Bearer ${token.token.accessToken}`,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("errorr");
        throw new Error("Request failed with status code: " + response.status);
      }
    })
    .catch((error) => {
      throw new Error("API request failed: " + error.message);
    });
};
function* fetchJobFormDataSaga() {
  let data = yield call(fetchJobFormData);
  console.log("data", data);
  yield put({ type: types.SET_JOB_FORM_SUCCESS, payload: data });
}
function* submitEditJobFormData(action) {
  const { accessToken, id } = action;

  console.log("in saga", accessToken, id);
  const data = {
    jobTitle: action.payload.jobTitle,
    experience: action.payload.experience,
    deadline: action.payload.deadline,
    email: action.payload.email,
    jobType: action.payload.jobType,
    salary: action.payload.salary,
    minSalary: action.payload.minSalary,
    maxSalary: action.payload.maxSalary,
    description: action.payload.description,
    phoneNumber: action.payload.phoneNumber,
  };

  try {
    const response = yield call(makeApiRequest, {
      endpoint: `/job/${id}`,
      method: "PUT",
      data: data,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.token.accessToken}`,
      },
    });
    // yield put(profileSaveSuccess(response.data));
    yield put({ type: JOB_EDIT_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    // yield put(profileSaveFailure(error));
    yield put({ type: JOB_EDIT_FAILURE, payload: error });
  }
}

export default function* watchFetchJobFormData() {
  yield takeEvery(types.FETCH_JOB_FORM_DATA, fetchJobFormDataSaga);
  yield takeEvery(types.SUBMIT_JOB_FORM_DATA, submitEditJobFormData);
}
