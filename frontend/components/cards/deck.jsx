import React, { useEffect, useState } from 'react';
import Card from './card';

const Deck = ({ deckOfCards, setDeckOfCards }) => {
    
    const currentDeck = deckOfCards.slice();

    useEffect(() => {
        if (currentDeck.length === 52) {
            setDeckOfCards(shuffle(currentDeck));
        }
    }, []);
    
    for (let suitCount = 0; suitCount < suits.length; suitCount++) {
        for (let valueCount = 0; valueCount < values.length; valueCount++) {
            currentDeck.push({
                suit: suits[suitCount],
                value: values[valueCount]
            });
        }
    }

    const shuffle = deck => {
        
    };

    return (
        <div>
            <p>
                {
                    deckOfCards.map(card => (
                        <div key={card.id}>
                            <Card suit={card.suit} value={card.value} />
                        </div>
                    ))
                }
            </p>
        </div>
    );
};

export default Deck;