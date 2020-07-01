import { RECEIVE_SIDEBAR } from '../actions/sidebar_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

const _defaultState = {
    open: false
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SIDEBAR:
            return action.sidebar;
        case REMOVE_SESSION:
            return _defaultState;
        default:
            return state;
    }
};