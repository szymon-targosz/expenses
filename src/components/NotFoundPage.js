import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className='not-found'>
        <div>
            PAGE <span>NOT</span> FOUND
        </div>
        <div className='not-found__error'>
            404
        </div>
        <Link className='button' to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;