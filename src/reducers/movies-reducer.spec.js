import { Actions } from '../actions';
import { moviesReducer } from './movies-reducer';

describe('moviesReducer', () => {
  it('should have initial state', () => {
    const state = moviesReducer(undefined, {});
    expect(state.isLoading).toBe(false);
    expect(state.isAdding).toBe(false);
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

  it('should be adding movie', () => {
    const state = moviesReducer(undefined, Actions.addMovieBegin());
    expect(state.isAdding).toBe(true);
  });

  it('should not be adding movie after cancelled', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieCancelled());

    expect(state.isAdding).toBe(false);
  });

  it('should be loading after add confirmed', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieConfirmed({ title: 'bob' }));

    expect(state.isLoading).toBe(true);
  });

  it('should not be adding movie after success', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieSuccess({ id: 54, title: 'bob' }));

    expect(state.isAdding).toBe(false);
  });

  it('should have new movie after successful add', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieSuccess({ id: 65, title: 'bob' }));
    expect(state.movies[65]).toEqual({ id: 65, title: 'bob' });
  });

  it('should not be loading after successful add', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieConfirmed({ title: 'bob' }));
    state = moviesReducer(state, Actions.addMovieSuccess({ id: 65, title: 'bob' }));

    expect(state.isLoading).toBe(false);
  });

  it('should not be loading after failed add', () => {
    let state = moviesReducer(undefined, Actions.addMovieBegin());
    state = moviesReducer(state, Actions.addMovieConfirmed({ title: 'bob' }));
    state = moviesReducer(state, Actions.addMovieFailed('something bad happened'));

    expect(state.isLoading).toBe(false);
  });
});
