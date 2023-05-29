import { FACEBOOK_SUCCESS } from "../type/facebookType";
const initialState = {
  CurrentUser: null,
  isLoggedIn: false,
  isLoggedOut: false,
};

export function facebookReducer(state = initialState, action) {
  switch (action.type) {
    case FACEBOOK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoggedIn: true,
        isLoggedOut: false,
      };

    default:
      return state;
  }
}
