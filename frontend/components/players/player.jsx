import React from 'react';
import Card from '../cards/card';

const Player = ({player}) => {
    return (
        <div>
            <p>
                {player.name} Score: {player.score}
            </p><br/>
            { player.card &&
                <p>{player.name} Deck: {player.hand.length}<br/>
                    {player.name === 'Player 1' ? <span>You</span> : <span>{player.name}</span>} played: <Card suit={player.card.suit} value={player.card.value}/><br/>
                </p>
            }
        </div>
    );
};

export default Player;