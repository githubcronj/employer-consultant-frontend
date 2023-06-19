
import * as types from "../type/fetchAppliedConsultantType";
const INITIAL_STATE = {
  isfetchappliedconsultantData: false,
  isremoveappliedconsultantData:false,

  fetchappliedconsultantData: [],
  removeappliedconsultantData:[],

};

export function fetchappliedConsultantReducer(state = INITIAL_STATE, action) {
  console.log(action.payload , "reducer")
  switch (action.type) {
  
    case types.FETCH_APPLIED_CONSULTANT_REQUEST:
      return {
        ...state,
        isfetchappliedconsultantData: false,
      };

    case types.FETCH_APPLIED_CONSULTANT_SUCCESS:
      return {
        ...state,
        fetchappliedconsultantData: action.payload,
        isfetchappliedconsultantData: true,
      };

    case types.FETCH_APPLIED_CONSULTANT_FAILURE:
      return {
        ...state,
        isfetchappliedconsultantData: false,
      };
    case types.REMOVE_APPLIED_CONSULTANT_REQUEST:
      return{
        ...state,
        isremoveappliedconsultantData:false,
      };
    case types.REMOVE_APPLIED_CONSULTANT_SUCCESS:
      return {
        ...state,
        removeappliedconsultantData: action.payload,
        isremoveappliedconsultantData: true,
      };
    case types.REMOVE_APPLIED_CONSULTANT_FAILURE:
      return{
        ...state,
        isremoveappliedconsultantData:false,
      }
  
    default:
      return state;
  }
}





export default fetchappliedConsultantReducer;
