//Create an itemsReducer for an items slice of state.
//Remember: multiple reducers can respond to the same action! 

import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';


const itemsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
        nextState = action.payload.items;
        return nextState;
    default:
        return state;
    }
}

export default itemsReducer;
