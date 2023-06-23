import * as types from "../type/shortlistType";
const INITIAL_STATE = {
  iscoultantshortlisted: false,
  shortlistedConsultantData: [],
  isfetchshortlistedconsultant:false,
  fetchshortlistedconsultant:[],
  isrejectshortlistedconsultant:false,
  rejectshortlistedconsultant:[]
};
export function shortlistConsultantReducer(state = INITIAL_STATE, action) {
  console.log(action.payload , "shortlist reducer")
  
  switch (action.type) {
  
    case types.ADD_SHORTLIST_REQUEST:
      return {
        ...state,
        iscoultantshortlisted: false,
      };
    case types.ADD_SHORTLIST_SUCCESS:
      return {
        ...state,
        shortlistedConsultantData: action.payload,
        iscoultantshortlisted: true,
      };
    case types.ADD_SHORTLIST_FAILURE:
      return {
        ...state,
        iscoultantshortlisted: false,
      };
    case types.FETCH_SHORTLISTED_COSULTANT_REQUEST:
      return{
        ...state,
        isfetchshortlistedconsultant:false,
      };
    case types.FETCH_SHORTLISTED_CONSULTANT_SUCCESS:
      return{
        ...state,
        fetchshortlistedconsultant:action.payload,
        isfetchshortlistedconsultant:true,
      };
    case types.FETCH_SHORTLISTED_COSULTANT_FAILURE:
      return{
        ...state,
        isfetchshortlistedconsultant:false,
      }
      case types.REJECT_SHORTLISTED_COSULTANT_REQUEST:
        return{
          ...state,
          isrejectshortlistedconsultant:false,
        };
      case types.REJECT_SHORTLISTED_CONSULTANT_SUCCESS:
        return{
          ...state,
          rejectshortlistedconsultant:action.payload,
          isrejectshortlistedconsultant:true,
        };
      case types.REJECT_SHORTLISTED_COSULTANT_FAILURE:
        return{
          ...state,
          isrejectshortlistedconsultant:false,
        }

    default:
      return state;
  }
}
export default shortlistConsultantReducer;