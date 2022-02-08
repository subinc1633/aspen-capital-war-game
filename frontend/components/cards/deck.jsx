import React, { useEffect, useState } from 'react';
import Card from './card';

const Deck = ({ deckOfCards, setDeckOfCards }) => {
    const suits = ['♦', '♣', '♥', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
        for (let i = deck.length - 1; i > 0; i--) {
            deck[i]['id'] = i;
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck;
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