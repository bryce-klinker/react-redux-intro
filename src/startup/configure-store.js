import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';
import { socketMiddleware } from '../middleware';

export function configureStore() {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { baseUrl: 'http://localhost:3000' },
  });
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware, socketMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}
