import { Router } from 'express';

import { getMoviesArraySelector, getMovieByIdSelector, getAllSocketsSelector } from '../reducers';
import { MovieActions } from '../actions';
import { Actions } from '../../actions';

export function createMoviesRouter(store) {
  const router = Router();
  router.get('/', (req, res) => {
    const state = store.getState();
    res.json(getMoviesArraySelector(state));
  });

  router.get('/:id', (req, res) => {
    const state = store.getState();
    res.json(getMovieByIdSelector(req.params.id)(state));
  });

  router.post('/', (req, res) => {
    store.dispatch(MovieActions.addMovie(req.body));

    const movies = getMoviesArraySelector(store.getState());
    const sockets = getAllSocketsSelector(store.getState());

    const movie = movies.slice(-1)[0];
    sockets.forEach(s => s.emit('action', Actions.addMovieSuccess(movie)));

    res.status(201);
    res.setHeader('Location', `${req.protocol}://${req.headers.host}${req.originalUrl}/${movie.id}`);
    res.end();
  });
  return router;
}
