import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

export function mountWithStore(Component, store, props = {}) {
  return mount(
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
