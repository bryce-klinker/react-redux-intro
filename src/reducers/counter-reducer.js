import { createSelector } from 'reselect';
import { handleActions } from 'redux-actions';

import { ActionTypes } from '../actions';

export const getCurrentCountSelector = createSelector(
  ({ counter: { current = 0 } = {} } = {}) => current,
  current => current
);

const increment = state => ({ ...state, current: state.current + 1 });
const decrement = state => ({ ...state, current: state.current - 1 });

export const counterInitialState = {
  current: 0,
};

export const counterReducer = handleActions(
  {
    [ActionTypes.INCREMENT]: increment,
    [ActionTypes.DECREMENT]: decrement,
  },
  counterInitialState
);
