import React from 'react';
import { Provider } from 'react-redux';

import { MoviesListContainer } from '../movies';
import { CounterContainer } from '../counter';

export const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <CounterContainer />
      <MoviesListContainer />
    </div>
  </Provider>
);
