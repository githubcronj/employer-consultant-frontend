import * as types from "../type/shortlistType";
const INITIAL_STATE = {
  iscoultantshortlisted: false,
  shortlistedConsultantData: [],
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

    default:
      return state;
  }
}
export default shortlistConsultantReducer;