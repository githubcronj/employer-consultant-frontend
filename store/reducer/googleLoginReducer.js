import * as types from '../type/logintype';

const INITIAL_STATE = {
  CurrentUser: null,
  isLoggedIn: false,
  isLoggedOut: false,
 
};
export function LoginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    
        //google login
     
  
      case types.GOOGLE_LOGIN_SUCCESS:
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