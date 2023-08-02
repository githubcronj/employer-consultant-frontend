import * as types from "../type/emailInviteType";

const initialState = {
  isEmailInvite: false,
};

const emailInviteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMAIL_INVITE:
      return {
        ...state,
        isEmailInvite: true,
      };

    case types.EMAIL_INVITE_SUCCESS:
      return {
        ...state,
        isEmailInvite: false,
      };

    case types.EMAIL_INVITE_FAILURE:
      return {
        ...state,
        isEmailInvite: false,
      };
    default:
      return state;
  }
};

export default emailInviteReducer;
