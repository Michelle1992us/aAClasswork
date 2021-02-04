//import utils created previously
import { postUser, deleteSession, postSession } from '../utils/session';

//made to make sure they're the same no matter where we use them (checks for spelling errors)
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

//action creator methods
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user, //payload
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

//thunk action creators
export const createNewUser = formUser => dispatch => postUser(formUser) 
//takes in user object from form -> curry/recieve dispatch from thunk middleware 
//-> calls postUser method made above w/ formUser
  .then(user => dispatch(receiveCurrentUser(user)));
//if successfully returned a user, dispatch the receiveCurrentUser w/ the user from dispatch call

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
