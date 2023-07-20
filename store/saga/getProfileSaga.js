import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/getProfileType";

import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";

function* getProfile(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/employer/profile",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload.token}`,

        Token: `Bearer ${action.payload.token}`,
      },
    });
    yield put({ type: types.PROFILE_SUCCESS, payload: response });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: types.PROFILE_FAILURE, payload: error });
  }
}

export default function* watchgetProfileRequest() {
  yield takeLatest(types.PROFILE_REQUEST, getProfile);
}
