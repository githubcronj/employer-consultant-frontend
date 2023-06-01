import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/getProfileType";
import {
  PROFILE_FAILURE,
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
} from "../type/getProfileType";

import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";

function* getProfile(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/employer/profile",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload}`,

        Token: `Bearer ${action.payload}`,
      },
    });
    yield put({ type: PROFILE_SUCCESS, payload: response });
    console.log("test in saga", response);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: PROFILE_FAILURE, payload: error });
  }
}

export default function* watchgetProfileRequest() {
  yield takeLatest(types.PROFILE_REQUEST, getProfile);
}
