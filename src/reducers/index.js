import { combineReducers } from 'redux';

import { moviesReducer } from './movies-reducer';

export * from './movies-reducer';
export * from './counter-reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
