import React from 'react';

const Card = ({ suit, value }) => {
    return (
        <span>
            {value}{suit}
        </span>
    );
};

export default Card;