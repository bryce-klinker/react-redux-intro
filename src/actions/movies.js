import { createAction } from 'redux-actions';

export const MovieActionTypes = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED: 'GET_MOVIES_FAILED',
  ADD_MOVIE_BEGIN: 'ADD_MOVIE_BEGIN',
  ADD_MOVIE_CANCELLED: 'ADD_MOVIE_CANCELLED',
  ADD_MOVIE_CONFIRMED: 'ADD_MOVIE_CONFIRMED',
  ADD_MOVIE_SUCCESS: 'ADD_MOVIE_SUCCESS',
  ADD_MOVIE_FAILED: 'ADD_MOVIE_FAILED',
};

const getMovies = createAction(MovieActionTypes.GET_MOVIES);
const getMoviesSuccess = createAction(MovieActionTypes.GET_MOVIES_SUCCESS, movies => movies);
const getMoviesFailed = createAction(MovieActionTypes.GET_MOVIES_FAILED, err => err);

const addMovieBegin = createAction(MovieActionTypes.ADD_MOVIE_BEGIN);
const addMovieCancelled = createAction(MovieActionTypes.ADD_MOVIE_CANCELLED);
const addMovieConfirmed = createAction(MovieActionTypes.ADD_MOVIE_CONFIRMED, movie => movie);
const addMovieSuccess = createAction(MovieActionTypes.ADD_MOVIE_SUCCESS, movie => movie);
const addMovieFailed = createAction(MovieActionTypes.ADD_MOVIE_FAILED, err => err);

export const MovieActions = {
  getMovies,
  getMoviesSuccess,
  getMoviesFailed,
  addMovieBegin,
  addMovieCancelled,
  addMovieConfirmed,
  addMovieSuccess,
  addMovieFailed,
};
