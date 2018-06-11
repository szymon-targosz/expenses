import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
    <header>
        <Link to='/dashboard'>
            <h1>Expensify</h1>
        </Link>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);