const React = require('react');

const ReactDom = require('react-dom');

import MineFind from './src/MineFind';

import { Provider } from 'react-redux';

import store from './src/store';

ReactDom.render(
    <Provider store={store}>
        <MineFind />
    </Provider>,
    document.querySelector("#root")
);