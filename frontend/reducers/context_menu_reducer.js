import { RECEIVE_CONTEXT } from '../actions/context_menu_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CONTEXT:
            return { ...state, [action.name]: action.context };
        default:
            return state;
    }
};