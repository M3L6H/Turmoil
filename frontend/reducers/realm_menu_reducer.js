import { RECEIVE_SELECTED_REALM } from '../actions/realm_menu_actions';

const _defaultState = {
    selected: null
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SELECTED_REALM:
            return { ...state, selected: action.selected };
        default:
            return state;
    }
};