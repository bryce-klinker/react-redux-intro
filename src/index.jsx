import React from 'react';
import { render } from 'react-dom';
import { Root, configureStore, getTheme } from './startup';

const store = configureStore();
const theme = getTheme();
render(<Root store={store} theme={theme} />, document.getElementById('root'));
