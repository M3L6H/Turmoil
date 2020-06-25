import { RECEIVE_DIMENSIONS, RECEIVE_DIMENSION, REMOVE_DIMENSION } from '../actions/dimensions_actions';
import { RECEIVE_BEING } from '../actions/beings_actions';
import { RECEIVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BEING:
        case RECEIVE_SESSION:    
        case RECEIVE_DIMENSIONS:
            return action.dimensions || {};
        case RECEIVE_DIMENSION:
            return { ...state, [action.dimension.id]: action.dimension };
        case REMOVE_DIMENSION:
            const newState = Object.assign({}, state);
            delete newState[action.dimensionId];
            return newState;
        default:
            return state;
    }
};