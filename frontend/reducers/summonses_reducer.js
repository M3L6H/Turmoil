import { RECEIVE_SUMMONS, REMOVE_SUMMONS } from '../actions/summonses_actions';
import { RECEIVE_DIMENSION } from '../actions/dimensions_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DIMENSION:
            return action.summonses;
        case RECEIVE_SUMMONS:
            return { ...state, [action.summons.url]: action.summons };
        case REMOVE_SESSION:
            return {};
        case REMOVE_SUMMONS:
            const newState = Object.assign({}, state);
            delete newState[action.summonsId];
            return newState;
        default:
            return state;
    }
};