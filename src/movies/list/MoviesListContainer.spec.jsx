import { Actions } from '../../actions';
import { mountWithStore, createMockStore } from '../../../testing';
import { MoviesListContainer } from './MoviesListContainer';

describe('MoviesListContainer', () => {
    it('should get all movies', () => {
        const store = createMockStore();
        mountWithStore(MoviesListContainer, store);

        expect(store.getActions()).toContainEqual(Actions.getMovies());
    })
})