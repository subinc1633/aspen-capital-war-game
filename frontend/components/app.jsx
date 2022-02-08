import React, { useState } from 'react';
import Player from './players/player';
import Deck from './cards/deck';

const App = () => {
    const [deckOfCards, setDeckOfCards] = useState([]);

    const newGame = () => {
        // shuffle on new game
        // distribute decks to players
    }

    return (
        <div>
            <h1>Game of War</h1>
            <Player />
            <Deck setDeck={setDeckOfCards}/>
            <button>New Game</button>
        </div>
    )
};

export default App;