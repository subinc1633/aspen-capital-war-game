import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Play from './play';
import GameOver from './game_over';
import { fetchPlayers } from '../../actions/player_actions';

const Game = ({ deck, setDeck, createGame, values }) => {
    const [gameOver, setGameOver] = useState(false);
    let slice1 = deck.slice(0, 26);
    let slice2 = deck.slice(26);
    const [player1, setPlayer1] = useState({
        hand: slice1,
        card: slice1[slice1.length - 1],
        points: 0
    });
    const [player2, setPlayer2] = useState({
        hand: slice2,
        card: slice2[slice2.length - 1],
        points: 0
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlayers()).then(res => {
            setPlayer1(Object.values(res.players)[0]);
            setPlayer2(Object.values(res.players)[1])
        });
    }, []);

    return (
        <div>
            {
                gameOver ?
                    <GameOver createGame={createGame} setGameOver={setGameOver} />
                :
                    <Play
                        deck={deck}
                        player1={player1}
                        player2={player2}
                        setPlayer1={setPlayer1}
                        setPlayer2={setPlayer2}
                        setDeck={setDeck}
                        setGameOver={setGameOver}
                        values={values} />
            }
        </div>
    );
};

export default Game;