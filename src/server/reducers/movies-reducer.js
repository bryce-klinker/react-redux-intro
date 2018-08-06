import uuid from 'uuid/v1';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { MovieActionTypes } from '../actions';

export const getMoviesArraySelector = createSelector(
  ({ movies: { movies = [] } = {} } = {}) => movies,
  movies => movies
);

export const getMovieByIdSelector = id =>
  createSelector(({ movies: { movies = [] } = {} } = {}) => movies, movies => movies.find(m => m.id === id));

const addMovie = (state, action) => ({
  ...state,
  movies: [
    ...state.movies,
    {
      ...action.payload.movie,
      id: uuid(),
    },
  ],
});

export const moviesInitialState = {
  movies: [],
};

export const moviesReducer = handleActions(
  {
    [MovieActionTypes.ADD_MOVIE]: addMovie,
  },
  moviesInitialState
);
