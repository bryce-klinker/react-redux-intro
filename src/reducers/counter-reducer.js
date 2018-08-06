import { ActionTypes } from '../actions';

export function getCurrentCountSelector({ counter = counterInitialState }) {
  return counter.current;
}

export const counterInitialState = {
  current: 0,
};

export function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, current: state.current + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, current: state.current - 1 };
    default:
      return state;
  }
}
