import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';
import { socketMiddleware } from '../middleware';

export function configureStore() {
  const dependencies = { baseUrl: BASE_URL };
  const epicMiddleware = createEpicMiddleware({
    dependencies,
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware, thunk.withExtraArgument(dependencies), socketMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
