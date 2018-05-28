import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName='is-active' to='/dashboard'>Dashboard</NavLink>
        <NavLink activeClassName='is-active' to='/create'>Create</NavLink>
        <button>Logout</button>
    </header>
);

export default Header;