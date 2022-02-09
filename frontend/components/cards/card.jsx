import React from 'react';

const Card = ({ suit, value }) => {
    return (
        <span className={
            (suit === '♦' || suit === '♥') ?
            "red-card" : "black-card"}>
            {value}{suit}
        </span>
    );
};

export default Card;