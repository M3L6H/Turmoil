import { 
    RECEIVE_BEINGS_ERRORS, 
    RECEIVE_BEING, 
    RECEIVE_BEINGS, 
    REMOVE_BEING 
} from '../actions/beings_actions';

import { 
    RECEIVE_SESSION_ERRORS, 
    RECEIVE_SESSION, 
    REMOVE_SESSION 
} from '../actions/session_actions';

const _defaultState = {
    beings: [],
    session: []
}

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BEINGS_ERRORS:
            return { ...state, beings: action.beings };
        case RECEIVE_BEING:
        case RECEIVE_BEINGS:
        case REMOVE_BEING:
            return { ...state, beings: [] };
        case RECEIVE_SESSION_ERRORS:
            return { ...state, session: action.session };
        case RECEIVE_SESSION:
        case REMOVE_SESSION:
            return { ...state, session: [] };
        default:
            return state;
    }
}