import React from 'react';
import Card from '../cards/card';

const Player = ({player}) => {
    return (
        <div>
            { player.card &&
                <p>{player.name} Deck Count:<br/>
                    {player.hand.length}<br/>
                    {player.name}'s card: <Card suit={player.card.suit} value={player.card.value}/><br/>
                    {player.name} Score:<br/>
                    {player.score}
                </p>
            }
        </div>
    );
};

export default Player;