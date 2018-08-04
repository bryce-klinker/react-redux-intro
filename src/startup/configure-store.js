import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';

export function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}
