import RECEIVE_SELECTED_DIMENSION from '../actions/dimension_menu_actions';

const _defaultState = {
    selected: null
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SELECTED_DIMENSION:
            return { ...state, selected: action.selected };
        default:
            return state;
    }
};