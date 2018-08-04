import { createSelector } from 'reselect';
import { handleActions } from 'redux-actions';

import { ActionTypes } from '../actions';

export const getMoviesArraySelector = createSelector(
  ({ movies: { movies = {} } = {} } = {}) => movies,
  movies => Object.keys(movies).map(m => movies[m])
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

export const moviesInitialState = {
  isLoading: false,
  movies: {},
};

export const moviesReducer = handleActions(
  {
    [ActionTypes.GET_MOVIES]: getMovies,
    [ActionTypes.GET_MOVIES_SUCCESS]: getMoviesSuccess,
    [ActionTypes.GET_MOVIES_FAILED]: getMoviesFailed,
  },
  moviesInitialState
);
