import configureMockStore from 'redux-mock-store';

export function createMockStore(state = {}) {
  return configureMockStore([])(state);
}
