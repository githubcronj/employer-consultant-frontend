import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/generateResponseType";
import {
  GENERATE_RESPONSE_SAVE_FAILURE,
  GENERATE_RESPONSE_SAVE_SUCCESS,
  GENERATE_RESPONSE_SAVE_LOADING,
} from "store/type/generateResponseType";

import { makeApiRequest } from "../../utils/api";

function* saveGenerateResponse(action) {
//   const data = {
//     jobTitle: action.payload.jobTitle,
//     experience: action.payload.experience,
//     jobType: action.payload.jobType,
//   };
  console.log(action,'djdfhhfue')
  try {
    yield put({ type: GENERATE_RESPONSE_SAVE_LOADING });
    
    const response = yield call(makeApiRequest, {
      endpoint: "/generate-description",
      method: "POST",
      data: action.payload.jobFields,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
    });

    yield put({ type: GENERATE_RESPONSE_SAVE_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);

    yield put({ type: GENERATE_RESPONSE_SAVE_FAILURE, payload: error });
  }
}

export default function* watchGenerateResponseRequest() {
  yield takeLatest(types.GENERATE_RESPONSE_SAVE_REQUEST, saveGenerateResponse);
}
