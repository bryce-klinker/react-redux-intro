import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

import { ActionTypes, Actions } from '../actions';

export const getMoviesEpic = (action$, state$, { baseUrl }) =>
  action$.ofType(ActionTypes.GET_MOVIES).pipe(
    mergeMap(() => ajax.get(`${baseUrl}/api/movies`)),
    map(res => res.response),
    map(movies => Actions.getMoviesSuccess(movies)),
    catchError(() => of(Actions.getMoviesFailed('Failed to get movies')))
  );
