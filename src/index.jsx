import React from 'react';
import { render } from 'react-dom';
import { Root, configureStore } from './startup';

const store = configureStore();
render(
    <Root store={store} />,
    document.getElementById('root')
)