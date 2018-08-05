import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();
export function mountWithStore(Component, store, props = {}) {
  return mount(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </MuiThemeProvider>
  );
}
