import { createAction } from 'redux-actions';

export const ActionTypes = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED: 'GET_MOVIES_FAILED',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const increment = () => ({ type: ActionTypes.INCREMENT });
const decrement = () => ({ type: ActionTypes.DECREMENT });

const getMovies = createAction(ActionTypes.GET_MOVIES);
const getMoviesSuccess = createAction(ActionTypes.GET_MOVIES_SUCCESS, movies => movies);
const getMoviesFailed = createAction(ActionTypes.GET_MOVIES_FAILED, err => err);

export const Actions = {
  getMovies,
  getMoviesSuccess,
  getMoviesFailed,
  increment,
  decrement,
};
