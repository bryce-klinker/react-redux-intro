import { Dialog } from '@material-ui/core';

import { mountWithStore, createMockStore } from '../../../testing';
import { AddMovieContainer } from './AddMovieContainer';
import { Actions } from '../../actions';

describe('AddMovieContainer', () => {
  it('should should be showing add dialog', () => {
    const store = createMockStore({
      movies: {
        isAdding: true,
      },
    });

    const addMovie = mountWithStore(AddMovieContainer, store);
    expect(addMovie.find(Dialog).props().open).toBe(true);
  });

  it('should not be showing add dialog', () => {
    const store = createMockStore();

    const addMovie = mountWithStore(AddMovieContainer, store);
    expect(addMovie.find(Dialog).props().open).toBe(false);
  });

  it('should cancel add movie', () => {
    const store = createMockStore({
      movies: {
        isAdding: true,
      },
    });

    const addMovie = mountWithStore(AddMovieContainer, store);
    addMovie.find('button.cancel-button').simulate('click');

    expect(store.getActions()).toContainEqual(Actions.addMovieCancelled());
  });

  it('should confirm add movie', () => {
    const store = createMockStore({
      movies: {
        isAdding: true,
      },
    });

    const addMovie = mountWithStore(AddMovieContainer, store);
    enterValueInField(addMovie, 'title', 'Bob');
    addMovie.find('button.confirm-button').simulate('click');

    expect(store.getActions()).toContainEqual(Actions.addMovieConfirmed({ title: 'Bob' }));
  });

  it('should confirm add movie', () => {
    const store = createMockStore({
      movies: {
        isAdding: true,
      },
    });

    const addMovie = mountWithStore(AddMovieContainer, store);
    enterValueInField(addMovie, 'title', 'Bob');
    addMovie.find('button.confirm-button').simulate('tap');

    expect(store.getActions()).toContainEqual(Actions.addMovieConfirmed({ title: 'Bob' }));
  });

  function enterValueInField(container, fieldName, value) {
    const input = container.find(`input#${fieldName}`).getDOMNode();
    input.value = value;
    container.find(`input#${fieldName}`).simulate('change', { currentTarget: { value } });
  }
});
