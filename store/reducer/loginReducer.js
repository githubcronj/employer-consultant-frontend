import * as types from '../type/logintype';

const INITIAL_STATE = {
  CurrentUser: null,
  isLoggedIn: false,
  isLoggedOut: false,
};

export function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isLoggedIn: true,
        isLoggedOut: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        CurrentUser: null,
        isLoggedIn: false,
        isLoggedOut: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn:false,
        isLoggedOut:true,
      }  

      //google login
   
      case types.GOOGLE_LOGIN:
        return {
          ...state,
         
          isLoggedOut: false,
         
        };
        case types.GOOGLE_LOGIN_SUCCESS:
          return {
            ...state,
            // data: action.payload,
            CurrentUser: action.payload.data,
            isLoggedIn: true,
            isLoggedOut: false,
           
          };
    case types.GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        CurrentUser: null,
        isLoggedIn: false,
        isLoggedOut: true,
       
      };
   
    
    default:
      return state;
  }
}
