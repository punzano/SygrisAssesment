import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.SIGNUP_REQUEST:
      return {
        user: action.user
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.SIGNUP_FAILURE:
      return {};  
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}