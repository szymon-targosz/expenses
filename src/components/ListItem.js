import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ListItem = ({ description, note, amount, createdAt, id }) => (
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </Link>
);

export default ListItem;