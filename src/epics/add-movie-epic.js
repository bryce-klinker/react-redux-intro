import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

import { ActionTypes, Actions } from '../actions';

export const addMovieEpic = (action$, state$, { baseUrl }) =>
  action$.ofType(ActionTypes.ADD_MOVIE_CONFIRMED).pipe(
    mergeMap(({ payload }) => ajax.post(`${baseUrl}/api/movies`, payload, { 'Content-Type': 'application/json' })),
    mergeMap(res => ajax.get(res.xhr.getResponseHeader('Location'))),
    map(res => res.response),
    map(movie => Actions.addMovieSuccess(movie)),
    catchError(err => of(Actions.addMovieFailed('Failed to add movie')))
  );
