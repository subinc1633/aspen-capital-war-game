import React from 'react';


const Game = (props) => {
    const suits = ['♦', '♣', '♥', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const [deck, setDeck] = useState([]);

    const newGame = () => {
        // add card values to deck
        for (let suitCount = 0; suitCount < suits.length; suitCount++) {
            for (let valueCount = 0; valueCount < values.length; valueCount++) {
                deck.push({
                    suit: suits[suitCount],
                    value: values[valueCount]
                });
            }
        }

        // shuffle deck
        for (let i = deck.length - 1; i > 0; i--) {
            deck[i]['id'] = i;
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck;
    }

    

    return (
        <div>

        </div>
    );
};

export default Game;