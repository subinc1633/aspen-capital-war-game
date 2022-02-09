import React, { useEffect } from 'react';
import { updatePlayer } from '../../actions/player_actions';
import PlayerIndex from '../players/player_index';
import { useDispatch } from 'react-redux';

const Play = (props) => {
    let { player1, player2, setPlayer1, setPlayer2, setDeck, setGameOver, values } = props;
    let war = [];
    const dispatch = useDispatch();

    useEffect(() => {
        if (!player1.hand.length) {
            let updated1 = {
                id: player1.id,
                name: 'Player 1',
                score: player1.score + 1
            }

            dispatch(updatePlayer(updated1));
            setPlayer1(prevState => {
                return {
                    ...prevState,
                    score: player1.score + 1
                }
            });
        } else if (!player2.hand.length) {
            let updated2 = {
                id: player2.id,
                name: 'Player 2',
                score: player2.score + 1
            }

            dispatch(updatePlayer(updated2));
            setPlayer2(prevState => {
                return {
                    ...prevState,
                    score: player2.score + 1
                }
            })
        }
    })

    const handleClick = () => {
        if (player1.card && player2.card) {
            player1.hand.pop();
            player2.hand.pop();
            if (values.indexOf(player1.card.value) > values.indexOf(player2.card.value)) {
                player1.hand.unshift(player1.card, player2.card);
            } else if (values.indexOf(player1.card.value) < values.indexOf(player2.card.value)) {
                player2.hand.unshift(player1.card, player2.card);
            } else {
                war = [];

                for (let i = 1; i < 4; i++) {
                    war.push(player1.hand.pop());
                    war.push(player2.hand.pop());
                };

                if (player2.hand.length <= 3 || war[war.length - 2] && values.indexOf(war[war.length - 2].value) > values.indexOf(war[war.length - 1].value)) {
                    setPlayer1(prevState => {
                        return {
                            ...prevState,
                            hand: player1.hand.concat([player1.card, player2.card], war)
                        };
                    });
                } else {
                    setPlayer2(prevState => {
                        return {
                            ...prevState,
                            hand: player2.hand.concat([player1.card, player2.card], war)
                        };
                    });
                }

                setPlayer1(prevState => {
                    return {...prevState, card: war[war.length - 2]} });
                setPlayer2(prevState => { 
                    return {...prevState, card: war[war.length - 1]} });

                if (!player1.hand.length || !player2.hand.length) {
                    setDeck([]);
                    setGameOver(true);
                }

                return;
            }
            setPlayer1(prevState => {
                return {
                    ...prevState,
                    hand: player1.hand,
                    card: player1.hand[player1.hand.length - 1]
                };
            });
            setPlayer2(prevState => {
                return {
                    ...prevState,
                    hand: player2.hand,
                    card: player2.hand[player2.hand.length - 1]
                };
            });

            if (!player1.hand.length || !player2.hand.length) {
                if (!player1.hand.length) {
                    setPlayer2(prevState => { return { ...prevState, points: player2.points + 1 } });
                } else {
                    setPlayer1(prevState => { return {points: player1.points + 1} });
                }
                setDeck([]);
                setGameOver(true);
            }
        }
    };

    return (
        <div>
            <PlayerIndex
                player1={player1}
                player2={player2}
             />
            <button onClick={handleClick}>Draw</button>
        </div>
    )
};

export default Play;