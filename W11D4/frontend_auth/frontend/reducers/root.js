import { combineReducers } from 'redux';
import entitiesReducer from './entities';
//import sessionReducer to rootReducer
import sessionReducer from './session'

export default combineReducers({
  entities: entitiesReducer,
  //add new session reducer
  session: sessionReducer,
});
