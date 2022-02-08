import React, { useEffect, useState } from 'react';
import { updatePlayers } from '../../actions/player_actions';
import PlayerIndex from '../players/player_index';
import { useDispatch } from 'react-redux';

const Play = (props) => {
    let war = [];

    useEffect(() => {
        if (!props.player1.hand.length) {
            let updated1 = {
                id: Object.values(players)[0]
            }

            updatePlayers()
        } else if (!props.player2.hand.length) {
            updatePlayers()
        }
    })

    const handleClick = () => {
        if (player1Card && player2Card) {
            player1Hand.pop();
            player2Hand.pop();
            if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
                player1Hand.unshift(player1Card, player2Card);
            } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
                player2Hand.unshift(player1Card, player2Card);
            } else {
                for (let i = 1; i < 4; i++) {
                    war.push(player1Hand.pop());
                    war.push(player2Hand.pop());
                };

                if (player2Hand.length <= 3 || war[war.length - 2] && values.indexOf(war[war.length - 2].value) > values.indexOf(war[war.length - 1].value)) {
                    setPlayer1Hand(player1Hand.concat([player1Card, player2Card], war));
                } else {
                    setPlayer2Hand(player2Hand.concat([player1Card, player2Card], war));
                }

                setPlayer1Card(war[war.length - 2]);
                setPlayer2Card(war[war.length - 1]);

                war = [];

                if (!player1Hand.length || !player2Hand.length) {
                    setDeck([]);
                    setGameOver(true);
                }
                return;
            }
            setPlayer1Hand(player1Hand);
            setPlayer1Card(player1Hand[player1Hand.length - 1]);
            setPlayer2Hand(player2Hand);
            setPlayer2Card(player2Hand[player2Hand.length - 1]);

            if (!player1Hand.length || !player2Hand.length) {
                if (!player1Hand.length) {
                    setPlayer2Pt(player2Pt + 1);
                } else {
                    setPlayer1Pt(player1Pt + 1);
                }
                setDeck([]);
                setGameOver(true);
            }
        }
    };

    return (
        <div>
            <PlayerIndex
                deck={deck}
                players={players}
                player1Card={player1Card}
                player2Card={player2Card}
                player1Hand={player1Hand}
                player2Hand={player2Hand}
                score1={player1Pt}
                score2={player2Pt}
                setGameOver={setGameOver}
             />
            <button onClick={handleClick}>Draw</button>
        </div>
    )
};

export default Play;