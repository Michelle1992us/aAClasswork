import {combineReducers} from 'redux';

//This slice will hold information that affects how the user interacts with your app, 
//but is not relational data from your database. 
//For now, you can just have it point to callback that returns an empty object

const uiReducer = combineReducers({
    cb: {},
  });

export default uiReducer;