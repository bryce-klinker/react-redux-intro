import { combineReducers } from 'redux';

import { socketsReducer } from './sockets-reducer';
import { moviesReducer } from './movies-reducer';

export * from './movies-reducer';
export * from './sockets-reducer';

export const rootReducer = combineReducers({
  sockets: socketsReducer,
  movies: moviesReducer,
});
