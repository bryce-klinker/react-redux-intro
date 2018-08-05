import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';

import { MoviesListContainer, AddMovieContainer } from '../movies';
import { CounterContainer } from '../counter';

export const Root = ({ store, theme }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <CounterContainer />
        <MoviesListContainer />
        <AddMovieContainer />
      </div>
    </Provider>
  </MuiThemeProvider>
);
