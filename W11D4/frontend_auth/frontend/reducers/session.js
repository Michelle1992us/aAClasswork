//import constant from session actions
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

//create default state. What is returned if there's no user
const _nullSession = {
  currentUser: null, //POJO. Key of currentUser, value of null
};

export default (state = _nullSession, action) => {
  //freeze to prevent accidently mutating the state
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      //return as new slice of state the currentUser nested under the name "currentUser"
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
