
import * as types from "../type/fetchAppliedConsultantType";
const INITIAL_STATE = {
  isfetchappliedconsultantData: false,
  fetchappliedconsultantData: [],
};

export function fetchappliedConsultantReducer(state = INITIAL_STATE, action) {
  console.log(action.payload , "reducer")
  switch (action.type) {
  
    case types.FETCH_APPLIED_CONSULTANT_REQUEST:
      return {
        ...state,
        isfetchappliedconsultantData: false,
      };

    case types.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        fetchappliedconsultantData: action.payload.data,
        isfetchappliedconsultantData: true,
      };

    case types.FETCH_JOBS_FAILURE:
      return {
        ...state,
        isfetchappliedconsultantData: false,
      };
  
    default:
      return state;
  }
}





export default fetchappliedConsultantReducer;
