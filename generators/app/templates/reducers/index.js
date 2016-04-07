import { combineReducers } from 'redux';
import * as Actions from '../actions';

function envReducer(state) {
  return state;
}

export default combineReducers({
  env: envReducer,
});
