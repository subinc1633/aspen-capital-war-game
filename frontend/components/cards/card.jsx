import React, { useState } from 'react';

const Card = ({ props }) => {
    const [suits, setSuits] = useState(new Map([
        [0, '♦'],
        [1, '♣'],
        [2, '♥'],
        [3, '♠']
    ]));
    const [ranks, setRanks] = useState(new Map([
        [0, '2'],
        [1, '3'],
        [2, '4'],
        [3, '5'],
        [4, '6'],
        [5, '7'],
        [6, '8'],
        [7, '9'],
        [8, '10'],
        [9, 'J'],
        [10, 'Q'],
        [11, 'K'],
        [12, 'A']
    ]));

    return (
        <div>
            <p>{ranks.get(0)}{suits.get(0)}</p>
        </div>
    );
};

export default Card;