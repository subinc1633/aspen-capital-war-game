import * as PlayerApiUtil from '../util/player_api_util';

export const RECEIVE_ALL_PLAYERS = 'RECEIVE_ALL_PLAYERS';

export const receiveAllPlayers = (players) => ({
    type: RECEIVE_ALL_PLAYERS,
    players,
});

export const fetchPlayers = () => dispatch => (
    PlayerApiUtil.fetchPlayers().then(players => dispatch(receiveAllPlayers(players)))
);

export const updatePlayers = (playerId) => dispatch => (
    PlayerApiUtil.updatePlayers(playerId).then(players => dispatch(receiveAllPlayers(players)))
);