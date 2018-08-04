import mockXhr from 'xhr-mock';

import { createEpicStore } from '../../testing';
import { Actions } from '../actions';

describe('getMoviesEpic', () => {
  let store;

  beforeEach(() => {
    mockXhr.setup();
    store = createEpicStore();
  });

  afterEach(() => {
    mockXhr.reset();
  });

  it('should be successful getting movies', done => {
    mockXhr.get('http://localhost:3000/api/movies', {
      status: 200,
      body: JSON.stringify([]),
    });
    store.subscribe(() => {
      if (store.getActions().length < 2) return;

      expect(store.getActions()).toContainEqual(Actions.getMoviesSuccess([]));
      done();
    });
    store.dispatch(Actions.getMovies());
  });

  it('should fail getting movies', done => {
    mockXhr.get('http://localhost:3000/api/movies', {
      status: 500,
    });

    store.subscribe(() => {
      if (store.getActions().length < 2) return;

      expect(store.getActions()).toContainEqual(Actions.getMoviesFailed('Failed to get movies'));
      done();
    });
    store.dispatch(Actions.getMovies());
  });
});
