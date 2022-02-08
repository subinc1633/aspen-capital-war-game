import React from 'react';
import Player from './player';

const PlayerIndex = (props) => {
    return (
        <div>
            {
                props.players && Object.values(props.players).map(player => {
                    if (player.name === 'Player 1') {
                        return (
                            <Player
                                key={player.id}
                                player={player}
                                hand={props.player1Hand}
                                card={props.player1Card}
                                score={props.score1} />
                        );
                    } else {
                        return (
                            <Player
                                key={player.id}
                                player={player}
                                hand={props.player2Hand}
                                card={props.player2Card}
                                score={props.score2} />
                        );
                    }
                })
            }
        </div>
    );
};

export default PlayerIndex;