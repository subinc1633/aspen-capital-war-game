import React, { useState } from 'react';
import Game from './game/game';

const App = () => {
    const suits = ['♦', '♣', '♥', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const [gameStart, setGameStart] = useState(false);
    const [deck, setDeck] = useState([]);

    const createDeck = () => {
        for (let suitCount = 0; suitCount < suits.length; suitCount++) {
            for (let valueCount = 0; valueCount < values.length; valueCount++) {
                deck.push({
                    suit: suits[suitCount],
                    value: values[valueCount]
                });
            }
        }
    };

    const shuffle = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            deck[i]['id'] = i;
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck;
    };

    const createGame = () => {
        createDeck();
        setDeck(shuffle(deck));
        setGameStart(true);
        return deck;
    };

    return (
        <div className="game">
            <h1>Game of War</h1>
            { gameStart ?
                <Game
                    deck={deck}
                    setDeck={setDeck}
                    values={values}
                    createGame={createGame} />
            :
                
                <button className="start-button" onClick={createGame}>Start</button>
            }
            <footer>2022 Subin Cho | <a href="">GitHub</a> | <a href="">LinkedIn</a> | <a href="">Portfolio</a></footer>
        </div>
    )
};

export default App;