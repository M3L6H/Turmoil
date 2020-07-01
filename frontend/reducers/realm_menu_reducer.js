import { RECEIVE_SELECTED_REALM } from '../actions/realm_menu_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

const _defaultState = {
    selected: null
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SELECTED_REALM:
            return { ...state, selected: action.selected };
        case REMOVE_SESSION:
            return _defaultState;
        default:
            return state;
    }
};