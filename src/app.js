import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = createStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    // store.dispatch(startSetExpenses());
    ReactDOM.render(jsx, document.getElementById('app'));
});