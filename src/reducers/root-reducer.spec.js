import { rootReducer } from './root-reducer';

import { moviesInitialState } from './movies-reducer';
import { counterInitialState } from './counter-reducer';

describe('rootReducer', () => {
  it('should have movies initial state', () => {
    const state = rootReducer(undefined, {});
    expect(state.movies).toEqual(moviesInitialState);
  });

  it('should have counter initial state', () => {
    const state = rootReducer(undefined, {});
    expect(state.counter).toEqual(counterInitialState);
  });
});
