// import * as types from "../type/recommandedJobtype";

//   export function fetchJobsRequest(payload,accessToken) {
//     return {
//       type: types.FETCH_JOBS_REQUEST,
//       payload: {
//         data: payload,
//         token: accessToken,
//       },

//     };

//   }

//   export function fetchJobsSuccess(payload) {
//     return {
//       type: types.FETCH_JOBS_SUCCESS,
//       payload: payload,
//     };
//   }

//   export function fetchJobsFailure(payload) {
//     return {
//       type: types.FETCH_JOBS_FAILURE,
//       payload: payload,
//     };
//   }

import * as types from "../type/recommandedJobtype";

export function fetchJobsRequest(payload, accessToken) {
  return {
    type: types.FETCH_JOBS_REQUEST,
    payload: {
      data: payload,
      token: accessToken,
    },
  };
}

export function fetchJobsSuccess(payload) {
  return {
    type: types.FETCH_JOBS_SUCCESS,
    payload: payload,
  };
}

export function fetchJobsFailure(payload) {
  return {
    type: types.FETCH_JOBS_FAILURE,
    payload: payload,
  };
}

// recommand job with querypara
export function fetchRecommendJobs(payload, accessToken) {
  return {
    type: types.FETCH_RECOMMAND_JOBS,
    payload: {
      data: payload,
      token: accessToken,
    },
  };
}

export function fetchRecommendSuccess(payload) {
  return {
    type: types.FETCH_RECOMMAND_JOBS_SUCCESS,
    payload: payload,
  };
}

export function fetchRecommendFailure(payload) {
  return {
    type: types.FETCH_RECOMMAND_JOBS_FAILURE,
    payload: payload,
  };
}

// export const navigateToJobApplySearch = (id) => {
//   return {
//     type: 'NAVIGATE_TO_JOB_APPLY_SEARCH',
//     payload: id
//   };
// };
