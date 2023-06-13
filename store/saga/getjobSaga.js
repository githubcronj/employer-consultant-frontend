import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/getjobType";
import {
  GET_JOB_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
} from "../type/getjobType";
import { makeApiRequest } from "../../utils/api";

function* getJob(action) {
  try {
    const accessToken = localStorage.getItem("CurrentUser");
    const token = JSON.parse(accessToken);
    const filterParams = action.payload; // Filter parameters
    let url;
    if (filterParams.length>0) {
      url = `/job`;
    } else {
      url = `/job?&skip=0&limit=5&${new URLSearchParams(filterParams)}`;
    }
    // const url =`/job?${new URLSearchParams(filterParams)}`
    // const url =`/job`    
    // const filterurl = `/job?jobType=${action.payload.jobType}&limit=5&minExp=${action.payload.minExp}&maxExp=${action.payload.maxExp}&minSalary=${action.payload.minSalary}`;
    const response = yield call(makeApiRequest, {
      endpoint: url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token.accessToken}`,

        Token: `Bearer ${action.payload}`,
      },
    });

    yield put({
      type: GET_JOB_SUCCESS,
      payload: response,
      accessToken: token.token.accessToken,
    });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: GET_JOB_FAILURE, payload: error });
  }
}

export default function* watchgetJobRequest() {
  yield takeLatest(types.GET_JOB_REQUEST, getJob);
}
