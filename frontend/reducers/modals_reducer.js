import { 
    RECEIVE_AUTH_MODAL,
    RECEIVE_CLUSTER_MODAL,
    RECEIVE_DIMENSION_MODAL,
    RECEIVE_REALM_MODAL,
    RECEIVE_SUMMONS_MODAL
} from '../actions/modals_actions';

import { REMOVE_SESSION } from '../actions/session_actions';

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
    },
    summonses: {
        open: false,
        formType: "new"
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
        case RECEIVE_REALM_MODAL:
            return { ...state, realms: action.modal };
        case RECEIVE_SUMMONS_MODAL:
            return { ...state, summonses: action.modal };
        case REMOVE_SESSION:
            return _defaultState;
        default:
            return state;
    }
};