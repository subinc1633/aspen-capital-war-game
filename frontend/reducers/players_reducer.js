import { RECEIVE_ALL_PLAYERS } from '../actions/player_actions';

const playersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYERS:
            return action.players;
        default:
            return state;
    }
};

export default playersReducer;