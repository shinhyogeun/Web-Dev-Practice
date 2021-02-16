const React = require('react');
const ReactDom = require('react-dom');
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import MineFind from './MineFind';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector("#root"));