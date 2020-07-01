import { RECEIVE_SELECTED_DIMENSION } from '../actions/dimension_menu_actions';
import { RECEIVE_DIMENSION } from '../actions/dimensions_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

const _defaultState = {
    selected: "dms"
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DIMENSION:
            return { ...state, selected: action.dimension.id };
        case RECEIVE_SELECTED_DIMENSION:
            return { ...state, selected: action.selected };
        case REMOVE_SESSION:
            return _defaultState;
        default:
            return state;
    }
};