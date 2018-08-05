import mockXhr from 'xhr-mock';

import { createEpicStore } from '../../testing';
import { Actions } from '../actions';

describe('addMovieEpic', () => {
  let store;

  beforeEach(() => {
    mockXhr.setup();
    store = createEpicStore();
  });

  afterEach(() => {
    mockXhr.reset();
  });

  it('should successfully add movie', done => {
    let request;
    mockXhr.post('http://localhost:3000/api/movies', (req, res) => {
      request = req;
      return res.header('Location', 'http://localhost:3000/api/movies/5').status(201);
    });

    mockXhr.get('http://localhost:3000/api/movies/5', {
      status: 200,
      body: JSON.stringify({ id: 5, title: 'Something' }),
    });

    store.subscribe(() => {
      if (store.getActions().length < 2) return;

      expect(request.header('Content-Type')).toBe('application/json');
      expect(request.body()).toBe(JSON.stringify({ title: 'Something' }));
      expect(store.getActions()).toContainEqual(Actions.addMovieSuccess({ id: 5, title: 'Something' }));
      done();
    });
    store.dispatch(Actions.addMovieConfirmed({ title: 'Something' }));
  });

  it('should fail adding movie', done => {
    mockXhr.post('http://localhost:3000/api/movies', {
      status: 500,
    });

    store.subscribe(() => {
      if (store.getActions().length < 2) return;

      expect(store.getActions()).toContainEqual(Actions.addMovieFailed('Failed to add movie'));
      done();
    });
    store.dispatch(Actions.addMovieConfirmed({ title: 'idk' }));
  });
});
