import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
    <p>
       init
    </p>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(jsx , document.getElementById('app'));
});