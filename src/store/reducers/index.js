import { combineReducers } from 'redux';

import character from './character';
import global from './global';

const rootReducer = combineReducers({
  character,
  global
});

export default rootReducer;
