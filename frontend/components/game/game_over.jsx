import React from 'react';

const GameOver = ({ createGame, setGameOver, player1, player2, setPlayer1, setPlayer2 }) => {
    const newGame = () => {
        const newDeck = createGame();
        let slice1 = newDeck.slice(0, 1);
        let slice2 = newDeck.slice(26);

        setPlayer1(prevState => {
            return {
                ...prevState,
                hand: slice1,
                card: slice1[slice1.length - 1]
            }
        });

        setPlayer2(prevState => {
            return {
                ...prevState,
                hand: slice2,
                card: slice2[slice2.length - 1]
            }
        });

        setGameOver(false);
    };

    return (
        <div>
            <h3>Game Over</h3>
            {
                !player1.hand.length ?
                    <h5>Player 2 Wins</h5>
                :
                    <h5>Player 1 Wins</h5>
            }
            <button onClick={() => newGame()}>Play Again</button>
        </div>
    );
};

export default GameOver;