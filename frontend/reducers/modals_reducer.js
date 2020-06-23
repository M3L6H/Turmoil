import { 
    RECEIVE_AUTH_MODAL 
} from '../actions/modals_actions';

const _defaultState = {
    auth: {
        open: false
    }
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUTH_MODAL:
            return { ...state, auth: action.modal };
        default:
            return state;
    }
};