import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/viewProfileType";

import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";

function* viewProfile(action) {
  console.log("in saga", action.payload.token);
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/fetch-resume",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload.token}`,

        Token: `Bearer ${action.payload.token}`,
      },
    });
    yield put({ type: types.GET_PROFILE_SUCCESS, payload: response });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: types.GET_PROFILE_FAILURE, payload: error });
  }
}

export default function* watchviewProfileRequest() {
  yield takeLatest(types.GET_PROFILE_REQUEST, viewProfile);
}
