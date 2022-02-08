import React from 'react';

const GameOver = ({ createGame, setGameOver }) => {
    const newGame = () => {
        createGame();
        setGameOver(false);
    };

    return (
        <div>
            <button onClick={() => newGame()}>Play Again</button>
        </div>
    );
};

export default GameOver;