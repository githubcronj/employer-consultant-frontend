import * as types from "../type/selectTypes";
const INITIAL_STATE = {
  isconsultantselected: false,
  selectedConsultantData: [],
  isrejectselectedconsultant: false,
  rejectselectedconsultant: [],
  isfetchselectedconsultant: false,
  fetchselectedconsultant: [],
};
export function selectedConsultantReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_SELECT_CONSULTANT_REQUEST:
      return {
        ...state,
        isconsultantselected: false,
      };
    case types.ADD_SELECT_CONSULTANT_SUCCESS:
      return {
        ...state,
        selectedConsultantData: action.payload,
        isconsultantselected: true,
      };
    case types.ADD_SELECT_CONSULTANT_FAILURE:
      return {
        ...state,
        isconsultantselected: false,
      };
    case types.FETCH_SELECTED_CONSULTANT_REQUEST:
      return {
        ...state,
        isfetchselectedconsultant: false,
      };
    case types.FETCH_SELECTED_CONSULTANT_SUCCESS:
      return {
        ...state,
        fetchselectedconsultant: action.payload,
        isfetchselectedconsultant: true,
      };
    case types.FETCH_SELECTED_CONSULTANT_FAILURE:
      return {
        ...state,
        isfetchselectedconsultant: false,
      };
    case types.REJECT_SELECT_CONSULTANT_REQUEST:
      return {
        ...state,
        isrejectselectedconsultant: false,
      };
    case types.REJECT_SELECT_CONSULTANT_REQUEST:
      return {
        ...state,
        rejectselectedconsultant: action.payload,
        isrejectselectedconsultant: true,
      };
    case types.REJECT_SELECT_CONSULTANT_FAILURE:
      return {
        ...state,
        isrejectselectedconsultant: false,
      };
    default:
      return state;
  }
}
export default selectedConsultantReducer;
