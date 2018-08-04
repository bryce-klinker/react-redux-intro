import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Root } from './Root';
import { Actions } from '../actions';

describe('Root', () => {
    it('should get all movies', () => {
        const store = configureMockStore([])();
        mount(<Root store={store} />);

        expect(store.getActions()).toContainEqual(Actions.getMovies());
    });

    it('should show movies', () => {
        const store = configureMockStore([])({
            movies: {
                movies: {
                    '4': { id: 4, title: 'The Rocker' },
                    '5': { id: 5, title: 'The Avengers' }
                }
            }
        });

        const root = mount(<Root store={store} />);
        expect(root.text()).toContain('The Rocker');
        expect(root.text()).toContain('The Avengers');
    })
})