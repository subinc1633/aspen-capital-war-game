import React, { useEffect, useState } from 'react';
import Card from './card';

const Deck = ({ deck, setDeck }) => {
    const suits = ['♦', '♣', '♥', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const currentDeck = [];

    useEffect(() => {
        if (currentDeck.length === 52) {
            setDeck[shuffle(deck)];
        }
    }, []);
    
    const newDeck = () => {
        for (let suitCount = 0; suitCount < suits.length; suitCount++) {
            for (let valueCount = 0; valueCount < values.length; valueCount++) {
                currentDeck.push({
                    suit: suits[suitCount],
                    value: values[valueCount]
                });
            }
        }

        shuffle(currentDeck);
    }

    const shuffle = currentDeck => {
        if (currentDeck.length) {
            for (let i = currentDeck.length - 1; i > 0; i--) {
                currentDeck[i]['id'] = i;
                let j = Math.floor(Math.random() * (i + 1));
                [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
            }
        }

        return currentDeck;
    };

    return (
        <div>
            <p>
                { newDeck() }
                {
                    currentDeck.map(card => (
                        <Card key={card.id} suit={card.suit} value={card.value} />
                    ))
                }
            </p>
        </div>
    );
};

export default Deck;