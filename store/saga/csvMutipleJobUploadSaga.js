import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../type/csvMultipleJobUploadType';
import { CSV_SAVE_FAILURE, CSV_SAVE_SUCCESS } from 'store/type/csvMultipleJobUploadType';

import { makeApiRequest } from '../../utils/api';

function* saveCsvUpload(action) {
 
    console.log('in saga',action)
    const data = {
      csv: action?.payload?.csvData,
    }
    console.log(data,'ooooo')
  try {
    
    const response = yield call(makeApiRequest, {
        endpoint: '/job',
        method: 'POST',

        data: action?.payload?.csvData,
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.accessToken}`,
        },
      });
    yield put({ type: CSV_SAVE_SUCCESS, payload: response.data });
    console.log('test in saga',response.data)
  } catch (error) {
    console.log('API call error:', error);
    yield put({ type: CSV_SAVE_FAILURE, payload: error });

  }
}


export default function* watchCsvSaveRequest() {
  yield takeLatest(types.CSV_SAVE_REQUEST, saveCsvUpload);
}