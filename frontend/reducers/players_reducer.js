import { RECEIVE_ALL_PLAYERS, RECEIVE_PLAYER } from '../actions/player_actions';

const playersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYERS:
            return action.players;
        case RECEIVE_PLAYER:
            return Object.assign({}, state, { [action.player.id]: action.player });
        default:
            return state;
    }
};

export default playersReducer;