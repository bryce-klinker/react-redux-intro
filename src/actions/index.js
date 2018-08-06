import { CounterActionTypes, CounterActions } from './counter';
import { MovieActionTypes, MovieActions } from './movies';

export const ActionTypes = {
  ...MovieActionTypes,
  ...CounterActionTypes,
};

export const Actions = {
  ...MovieActions,
  ...CounterActions,
};
