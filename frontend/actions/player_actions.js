import * as PlayerApiUtil from '../util/player_api_util';

export const RECEIVE_ALL_PLAYERS = 'RECEIVE_ALL_PLAYERS';
export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';

export const receiveAllPlayers = (players) => ({
    type: RECEIVE_ALL_PLAYERS,
    players,
});

export const receivePlayer = (player) => ({
    type: RECEIVE_PLAYER,
    player,
})

export const fetchPlayers = () => dispatch => (
    PlayerApiUtil.fetchPlayers().then(players => dispatch(receiveAllPlayers(players)))
);

export const updatePlayer = (player) => dispatch => (
    PlayerApiUtil.updatePlayer(player).then(player => dispatch(receivePlayer(player)))
);