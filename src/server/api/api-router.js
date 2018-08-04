import { Router } from 'express';
import { createMoviesRouter } from './movies-router';

export function createApiRouter(store) {
  const router = Router();
  router.use('/movies', createMoviesRouter(store));
  return router;
}
