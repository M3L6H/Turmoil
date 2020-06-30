import { 
    RECEIVE_AUTH_MODAL,
    RECEIVE_CLUSTER_MODAL,
    RECEIVE_DIMENSION_MODAL
} from '../actions/modals_actions';

const _defaultState = {
    auth: {
        open: false,
        formType: "signIn"
    },
    clusters: {
        open: false
    },
    dimensions: {
        open: false
    },
    realms: {
        open: false
    }
};

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AUTH_MODAL:
            return { ...state, auth: action.modal };
        case RECEIVE_CLUSTER_MODAL:
            return { ...state, clusters: action.modal };
        case RECEIVE_DIMENSION_MODAL:
            return { ...state, dimensions: action.modal };
        default:
            return state;
    }
};