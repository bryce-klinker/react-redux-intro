import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Dialog } from '@material-ui/core';

import { getTheme } from './get-theme';
import { Root } from './Root';
import { Actions } from '../actions';
import { createMockStore } from '../../testing';

describe('Root', () => {
  it('should get all movies', () => {
    const store = configureMockStore([])();
    mount(<Root store={store} theme={getTheme()} />);

    expect(store.getActions()).toContainEqual(Actions.getMovies());
  });

  it('should show movies', () => {
    const store = createMockStore({
      movies: {
        movies: {
          '4': { id: 4, title: 'The Rocker' },
          '5': { id: 5, title: 'The Avengers' },
        },
      },
    });

    const root = mount(<Root store={store} theme={getTheme()} />);
    expect(root.text()).toContain('The Rocker');
    expect(root.text()).toContain('The Avengers');
  });

  it('should show counter', () => {
    const store = createMockStore({
      counter: {
        current: 7,
      },
    });

    const root = mount(<Root store={store} theme={getTheme()} />);
    expect(root.text()).toContain('7');
  });

  it('should show add movie', () => {
    const store = createMockStore({
      movies: {
        isAdding: true,
      },
    });

    const root = mount(<Root store={store} theme={getTheme()} />);
    expect(root.find(Dialog).props().open).toBe(true);
  });
});
