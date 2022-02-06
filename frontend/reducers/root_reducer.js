import players from './players_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    players,
});