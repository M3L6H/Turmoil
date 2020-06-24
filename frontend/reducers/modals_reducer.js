import { 
    RECEIVE_AUTH_MODAL,
    RECEIVE_DIMENSION_MODAL
} from '../actions/modals_actions';

const _defaultState = {
    auth: {
        open: false,
        formType: "signIn"
    },
    dimensions: {
        open: false
    }
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUTH_MODAL:
            return { ...state, auth: action.modal };
        case RECEIVE_DIMENSION_MODAL:
            return { ...state, dimensions: action.modal };
        default:
            return state;
    }
};