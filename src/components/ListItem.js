import React from 'react';

const ListItem = ({ description, note, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ListItem;