import { Actions } from '../actions';
import { counterReducer } from './counter-reducer';

describe('counterReducer', () => {
  it('should have initial state', () => {
    const state = counterReducer(undefined, {});
    expect(state.current).toBe(0);
  });

  it('should increment current count', () => {
    let state = counterReducer(undefined, {});
    state = counterReducer(state, Actions.increment());
    expect(state.current).toBe(1);
  });

  it('should decrement current count', () => {
    let state = counterReducer(undefined, {});
    state = counterReducer(state, Actions.decrement());
    expect(state.current).toBe(-1);
  });
});
