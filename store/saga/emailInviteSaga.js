import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import {
  EMAIL_INVITE,
  EMAIL_INVITE_FAILURE,
  EMAIL_INVITE_SUCCESS,
} from "../type/emailInviteType";

function* emailInviteSagaData(action) {
  try {
    const payload = {
      //   jobId: action.payload.jobId,
      to: action.payload.to,
      subject: action.payload.subject,
      content: action.payload.content,
    };
    console.log(action, "vistjobapi");
    const response = yield call(makeApiRequest, {
      endpoint: "/email/sendInvite",
      method: "POST",
      data: payload,
      //   headers: {
      //     Authorization: `Bearer ${action.payload.finaltoken}`,
      //     "Content-Type": "application/json",
      //   },
    });
    yield put({ type: EMAIL_INVITE_SUCCESS, payload: response.data });
    toast.success(`Email sent to ${action.payload.to}`);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: EMAIL_INVITE_FAILURE, payload: error });
    toast.error("Some error occured!!");
  }
}
export default function* watchEmailInviteSaga() {
  yield takeLatest(EMAIL_INVITE, emailInviteSagaData);
}
