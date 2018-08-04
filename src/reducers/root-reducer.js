import { combineReducers } from 'redux';

import { moviesReducer } from './movies-reducer';
import { counterReducer } from './counter-reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  counter: counterReducer,
});
