import * as types from "../type/scheduleTypes";
const INITIAL_STATE = {
  iscoultantsheduled: false,
  sheduledConsultantData: [],
  isrejectsheduledconsultant:false,
  rejectsheduledconsultant:[],
  isfetchscheduledconsultant:false,
  fetchscheduledconsultant:[]
};
export function sheduledConsultantReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_SCHEDULE_CONSULTANT_REQUEST:
      return {
        ...state,
        iscoultantsheduled: false,
      };
    case types.ADD_SCHEDULE_CONSULTANT_SUCCESS:
      return {
        ...state,
        sheduledConsultantData: action.payload,
        iscoultantsheduled: true,
      };
    case types.ADD_SCHEDULE_CONSULTANT_FAILURE:
      return {
        ...state,
        iscoultantsheduled: false,
      };
      case types.FETCH_SCHEDULED_CONSULTANT_REQUEST:
        return{
          ...state,
          isfetchscheduledconsultant:false,
        };
      case types.FETCH_SCHEDULED_CONSULTANT_SUCCESS:
        return{
          ...state,
          fetchscheduledconsultant:action.payload,
          isfetchscheduledconsultant:true,
        };
      case types.FETCH_SCHEDULED_CONSULTANT_FAILURE:
        return{
          ...state,
          isfetchscheduledconsultant:false,
        }
      case types.REJECT_SCHEDULE_CONSULTANT_REQUEST:
        return{
          ...state,
          isrejectsheduledconsultant:false,
        };
      case types.REJECT_SCHEDULE_CONSULTANT_SUCCESS:
        return{
          ...state,
          rejectsheduledconsultant:action.payload,
          isrejectsheduledconsultant:true,
        };
      case types.REJECT_SCHEDULE_CONSULTANT_FAILURE:
        return{
          ...state,
          isrejectsheduledconsultant:false,
        }
    default:
      return state;
  }
}
export default sheduledConsultantReducer;
