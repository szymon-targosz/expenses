import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ description, note, amount, createdAt, id }) => (
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </Link>
);

export default ListItem;