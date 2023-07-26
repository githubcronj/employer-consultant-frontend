import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_APPLIED_CONSULTANT_REQUEST,
  REMOVE_APPLIED_CONSULTANT_REQUEST,
  REMOVE_APPLIED_CONSULTANT_SUCCESS,
} from "../type/fetchAppliedConsultantType";
import {
  fetchAppliedConsultantSuccess,
  fetchAppliedConsultantFailure,
  removeAppliedConsultantSuccess,
  removeAppliedConsultantFailure,
} from "../action/fetchAppliedConsultantAction";
import {
  rejectshortlistconsultantSuccess,
  rejectshortlistconsultantfailure,
} from "store/action/shortlistAction";
import { REJECT_SHORTLISTED_CONSULTANT_REQUEST } from "store/type/shortlistType";
import { toast } from "react-toastify";
function* fetchAppliedConsultantSaga(action) {
  try {
    const { data, token, type } = action?.payload;
    console.log(data, "data in action of saga");

    const queryParams = new URLSearchParams();

    if (data?.id.id && data?.search) {
      queryParams.set("search", data?.search);
    }
    if (data?.id.id && data?.location) {
      queryParams.set("location", data?.location);
    }

    const queryString = queryParams.toString();

    // ${
    //   action.payload.search ? `&search=${action.payload.search}` : ""
    // }

    const response = yield call(makeApiRequest, {
      endpoint: `/fetch-applied-consultant?${
        queryString ? `${queryString}&` : ""
      }jobId=${data?.id.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(fetchAppliedConsultantSuccess(response));
  } catch (error) {
    yield put(fetchAppliedConsultantFailure(error.message));
  }
}

function* rejectAppliedConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload, "actiion reject");
    const response = yield call(makeApiRequest, {
      endpoint: "/reject-applied-consultant",
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      data: {
        jobId: action.payload.jobId,
        consultantId: action.payload.consultantId,
      },
    });

    yield put(removeAppliedConsultantSuccess(response));
    toast.warn("User Rejected!!");
  } catch (error) {
    yield put(removeAppliedConsultantFailure(error.message));
  }
}
function* rejectShortlistedConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload, "actiion reject");
    const response = yield call(makeApiRequest, {
      endpoint: "/remove-shortlisted-consultant",
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      data: {
        jobId: action.payload.jobId,
        consultantId: action.payload.consultantId,
      },
    });

    yield put(rejectshortlistconsultantSuccess(response));
    toast.warn("User Removed Successfully!!");
  } catch (error) {
    yield put(rejectshortlistconsultantfailure(error.message));
  }
}
export function* watchAppliedConsultantSaga() {
  yield takeLatest(
    FETCH_APPLIED_CONSULTANT_REQUEST,
    fetchAppliedConsultantSaga
  );
  yield takeLatest(
    REMOVE_APPLIED_CONSULTANT_REQUEST,
    rejectAppliedConsultantSaga
  );
  yield takeLatest(
    REJECT_SHORTLISTED_CONSULTANT_REQUEST,
    rejectShortlistedConsultantSaga
  );
}
