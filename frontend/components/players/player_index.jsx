import React from 'react';
import Player from './player';

const PlayerIndex = ({ player1, player2 }) => (
    <div className="players-container">
        <Player player={player1} />
        <Player player={player2} />
    </div>
);

export default PlayerIndex;