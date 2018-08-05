import { combineEpics } from 'redux-observable';
import { getMoviesEpic } from './get-movies-epic';
import { addMovieEpic } from './add-movie-epic';

export const rootEpic = combineEpics(getMoviesEpic, addMovieEpic);
