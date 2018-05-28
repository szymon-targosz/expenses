import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = createStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(jsx, document.getElementById('app'));
});