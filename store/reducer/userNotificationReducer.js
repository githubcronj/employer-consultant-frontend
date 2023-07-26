import * as types from "../type/userNotificationType.js";

const initialState = {
  notificationData: [],
  isNotificationData: true,
};

const userNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NOTIFICATION_TYPE:
      return {
        ...state,
        isNotificationData: true,
      };
    case types.USER_NOTIFICATION_TYPE_SUCCESS:
      return {
        ...state,
        notificationData: action.payload,
        isNotificationData: false,
      };

    case types.USER_NOTIFICATION_TYPE_FAILURE:
      return {
        ...state,
        notificationData: action.payload,
        isNotificationData: false,
      };
    default:
      return state;
  }
};

export default userNotificationReducer;
