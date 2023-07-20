import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/recommandedJobtype";
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchRecommendSuccess,
  fetchRecommendFailure,
} from "../action/recommandedJobAction";
import { toast } from "react-toastify";

function* fetchJobs(action) {
  try {
    const { payload } = action;
    const { data, token } = payload;

    const queryParams = new URLSearchParams();

    console.log(data, "rsaga");

    if (["0", "1", "2", "3"].includes(data)) {
      queryParams.set("dateFilter", data);
    }
    if (data?.minExp) {
      queryParams.set("minExp", data.minExp);
    }
    if (data?.maxExp) {
      queryParams.set("maxExp", data.maxExp);
    }
    if (
      [
        "full-time",
        "part-time",
        "contract",
        "freelance",
        "temporary",
        "internship",
      ].includes(data)
    ) {
      queryParams.set("jobType", data);
    }

    if (data?.minSalary) {
      queryParams.set("minSalary", data.minSalary);
    }
    if (data?.maxSalary) {
      queryParams.set("maxSalary", data.maxSalary);
    }

    const queryString = queryParams.toString();
    console.log(queryString, "queryString");

    const response = yield call(makeApiRequest, {
      endpoint: `/recommend-jobs${queryString ? `?${queryString}` : ""}`,
      method: "GET",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });

    yield put(fetchJobsSuccess(response));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* fetchRecommendJobs(action) {
  try {
    const { payload } = action;
    const { data, token } = payload;
    const queryParams = {};

    // Add jobTitle parameter
    queryParams.jobTitle = data?.jobTitle;

    // Add location parameter if it exists
    if (data?.location) {
      queryParams.location = data.location;
    }

    const queryString = new URLSearchParams(queryParams).toString();
    const endpoint = `/recommend-jobs?${queryString}`;

    const response = yield call(makeApiRequest, {
      endpoint,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });
    // toast.success("")
    yield put(fetchRecommendSuccess(response));
  } catch (error) {
    toast.error("Job title is required", error.message);
    yield put(fetchRecommendFailure(error.message));
  }
}

export function* watchjobsSaga() {
  yield takeLatest(types.FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(types.FETCH_RECOMMAND_JOBS, fetchRecommendJobs);
}
