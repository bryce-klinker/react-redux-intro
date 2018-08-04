import { combineEpics } from 'redux-observable';
import { getMoviesEpic } from './get-movies-epic';

export const rootEpic = combineEpics(getMoviesEpic);
