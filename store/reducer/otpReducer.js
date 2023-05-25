import { OTP_REQUEST, OTP_SUCCESS, OTP_FAILURE } from "../type/otpType";

// Initial state
const initialState = {
  data: {},
  loading: false,
  error: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case OTP_FAILURE:
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
