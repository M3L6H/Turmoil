import { RECEIVE_BEINGS, RECEIVE_BEING, REMOVE_BEING } from '../actions/beings_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BEINGS:
            return action.beings;
        case RECEIVE_BEING:
            return { ...state, [action.being.id]: action.being };
        case REMOVE_BEING:
            const newState = Object.assign({}, state);
            delete newState[action.beingId];
            return newState;
        default:
            return state;
    }
};