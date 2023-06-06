import {
  REENTEROTP_REQUEST,
  REENTEROTP_SUCCESS,
  REENTEROTP_FAILURE,
} from "../type/registerType";
  
// Initial state
const initialState = {
  data: {},
  loading: false,
  error: null,
};
  
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REENTEROTP_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case REENTEROTP_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  case REENTEROTP_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  default:
    return state;
  }
};
  
export default reducer;
  