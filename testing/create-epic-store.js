import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import { rootEpic } from '../src/epics';

export const testingBaseUrl = 'http://localhost:3000';

export function createEpicStore(dependencies = { baseUrl: testingBaseUrl }, epic = rootEpic, state = {}) {
  const middleware = createEpicMiddleware({ dependencies });
  const store = configureMockStore([middleware])(state);
  middleware.run(epic);
  return store;
}
