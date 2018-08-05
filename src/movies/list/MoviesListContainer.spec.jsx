import { Actions } from '../../actions';
import { mountWithStore, createMockStore } from '../../../testing';
import { MoviesListContainer } from './MoviesListContainer';

describe('MoviesListContainer', () => {
  it('should get all movies', () => {
    const store = createMockStore();
    mountWithStore(MoviesListContainer, store);

    expect(store.getActions()).toContainEqual(Actions.getMovies());
  });

  it('should show all movies', () => {
    const store = createMockStore({
      movies: {
        movies: {
          4: { id: 4 },
          5: { id: 5 },
        },
      },
    });

    const list = mountWithStore(MoviesListContainer, store);
    expect(list.find('li.movie-item')).toHaveLength(2);
  });

  it('should begin adding movie', () => {
    const store = createMockStore();

    const list = mountWithStore(MoviesListContainer, store);
    list.find('button#add-movie').simulate('click');
    expect(store.getActions()).toContainEqual(Actions.addMovieBegin());
  });
});
