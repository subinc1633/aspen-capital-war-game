import React, { useState } from 'react';

const Card = ({ suit, value }) => {
    return (
        <div>
            <p>{value}{suit}</p>
        </div>
    );
};

export default Card;