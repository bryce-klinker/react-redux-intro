import { Actions } from '../actions';
import { moviesReducer } from './movies-reducer';

describe('moviesReducer', () => {
  it('should have initial state', () => {
    const state = moviesReducer(undefined, {});
    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual({});
  });

  it('should be loading', () => {
    const state = moviesReducer(undefined, Actions.getMovies());
    expect(state.isLoading).toBe(true);
  });

  it('should have movies', () => {
    let state = moviesReducer(undefined, Actions.getMovies());
    state = moviesReducer(state, Actions.getMoviesSuccess([{ id: 6 }, { id: 3 }]));

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual({
      6: { id: 6 },
      3: { id: 3 },
    });
  });

  it('should not be loading', () => {
    let state = moviesReducer(undefined, Actions.getMovies());
    state = moviesReducer(state, Actions.getMoviesFailed('nope'));

    expect(state.isLoading).toBe(false);
  });
});
