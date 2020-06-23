import { RECEIVE_SESSION, REMOVE_SESSION } from '../actions/session_actions';

const _defaultState = {
    currentBeingId: null
}

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION:
            return { currentBeingId: action.beingId }
        case REMOVE_SESSION:
            return _defaultState;
        default:
            return state;
    }
};