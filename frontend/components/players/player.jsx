import React, { useEffect, useState } from 'react';
import Card from '../cards/card';

const Player = ({player, hand, card}) => {
    return (
        <div>
            { card &&
                <p>{player.name} Deck Count:<br/>
                    {hand.length}<br/>
                    {player.name}'s card: <Card suit={card.suit} value={card.value}/><br/>
                    {player.name} Score:<br/>
                    {player.score}
                </p>
            }
        </div>
    );
};

export default Player;