import {  RECEIVE_DIMENSION_BEING, REMOVE_DIMENSION_BEING } from '../actions/dimension_beings_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DIMENSION_BEING:
            return { ...state, [action.dimensionBeing.id]: action.dimensionBeing };
        case REMOVE_DIMENSION_BEING:
            const newState = Object.assign({}, state);
            delete newState[action.dimensionBeingId];
            return newState;
        default:
            return state;
    }
};