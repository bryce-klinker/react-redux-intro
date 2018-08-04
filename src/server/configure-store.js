import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';
import { socketMiddleware } from './socket';

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(socketMiddleware));
}
