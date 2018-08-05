import { createAction } from 'redux-actions';

export const ActionTypes = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED: 'GET_MOVIES_FAILED',
  ADD_MOVIE_BEGIN: 'ADD_MOVIE_BEGIN',
  ADD_MOVIE_CANCELLED: 'ADD_MOVIE_CANCELLED',
  ADD_MOVIE_CONFIRMED: 'ADD_MOVIE_CONFIRMED',
  ADD_MOVIE_SUCCESS: 'ADD_MOVIE_SUCCESS',
  ADD_MOVIE_FAILED: 'ADD_MOVIE_FAILED',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const increment = () => ({ type: ActionTypes.INCREMENT });
const decrement = () => ({ type: ActionTypes.DECREMENT });

const getMovies = createAction(ActionTypes.GET_MOVIES);
const getMoviesSuccess = createAction(ActionTypes.GET_MOVIES_SUCCESS, movies => movies);
const getMoviesFailed = createAction(ActionTypes.GET_MOVIES_FAILED, err => err);

const addMovieBegin = createAction(ActionTypes.ADD_MOVIE_BEGIN);
const addMovieCancelled = createAction(ActionTypes.ADD_MOVIE_CANCELLED);
const addMovieConfirmed = createAction(ActionTypes.ADD_MOVIE_CONFIRMED, movie => movie);
const addMovieSuccess = createAction(ActionTypes.ADD_MOVIE_SUCCESS, movie => movie);
const addMovieFailed = createAction(ActionTypes.ADD_MOVIE_FAILED, err => err);

export const Actions = {
  getMovies,
  getMoviesSuccess,
  getMoviesFailed,
  addMovieBegin,
  addMovieCancelled,
  addMovieConfirmed,
  addMovieSuccess,
  addMovieFailed,
  increment,
  decrement,
};
