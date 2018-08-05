import { createSelector } from 'reselect';
import { handleActions } from 'redux-actions';

import { ActionTypes } from '../actions';

export const getMoviesArraySelector = createSelector(
  ({ movies: { movies = {} } = {} } = {}) => movies,
  movies => Object.keys(movies).map(m => movies[m])
);

export const getIsAddingMovieSelector = createSelector(
  ({ movies: { isAdding = false } = {} } = {}) => isAdding,
  isAdding => isAdding
);

const getMovies = state => ({ ...state, isLoading: true });

const getMoviesSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  movies: {
    ...action.payload.reduce((obj, movie) => {
      obj[movie.id] = movie;
      return obj;
    }, {}),
  },
});

const getMoviesFailed = state => ({ ...state, isLoading: false });

const addMovieBegin = state => ({ ...state, isAdding: true });
const addMovieCancelled = state => ({ ...state, isAdding: false });
const addMovieConfirmed = state => ({ ...state, isLoading: true });
const addMovieSuccess = (state, action) => ({
  ...state,
  isAdding: false,
  isLoading: false,
  movies: {
    ...state.movies,
    [action.payload.id]: action.payload,
  },
});
const addMovieFailed = state => ({ ...state, isLoading: false });

export const moviesInitialState = {
  isLoading: false,
  isAdding: false,
  movies: {},
};

export const moviesReducer = handleActions(
  {
    [ActionTypes.GET_MOVIES]: getMovies,
    [ActionTypes.GET_MOVIES_SUCCESS]: getMoviesSuccess,
    [ActionTypes.GET_MOVIES_FAILED]: getMoviesFailed,
    [ActionTypes.ADD_MOVIE_BEGIN]: addMovieBegin,
    [ActionTypes.ADD_MOVIE_CANCELLED]: addMovieCancelled,
    [ActionTypes.ADD_MOVIE_CONFIRMED]: addMovieConfirmed,
    [ActionTypes.ADD_MOVIE_SUCCESS]: addMovieSuccess,
    [ActionTypes.ADD_MOVIE_FAILED]: addMovieFailed,
  },
  moviesInitialState
);
