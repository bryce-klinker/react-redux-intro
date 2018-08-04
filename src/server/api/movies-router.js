import { Router } from 'express';

export function createMoviesRouter(store) {
  const router = Router();
  router.get('/', (req, res) => {
    res.json([]);
  });
  return router;
}
