import React from 'react';
import { Provider } from 'react-redux';

import { MoviesListContainer } from '../movies';

export const Root = ({store}) => (
    <Provider store={store}>
        <MoviesListContainer />
    </Provider>
);