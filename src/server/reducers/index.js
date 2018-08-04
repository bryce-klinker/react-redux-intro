import { combineReducers } from 'redux';

import { socketsReducer } from './sockets-reducer';

export const rootReducer = combineReducers({
  sockets: socketsReducer,
});
