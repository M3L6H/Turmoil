import { 
    RECEIVE_BEINGS_ERRORS, 
    RECEIVE_BEING, 
    RECEIVE_BEINGS, 
    REMOVE_BEING 
} from '../actions/beings_actions';

import { 
    RECEIVE_DIMENSION_BEINGS_ERRORS,
    RECEIVE_DIMENSION_BEING,
    REMOVE_DIMENSION_BEING
} from '../actions/dimension_beings_actions';

import { 
    RECEIVE_DIMENSIONS_ERRORS,
    RECEIVE_DIMENSION,
    RECEIVE_DIMENSIONS,
    REMOVE_DIMENSION
} from '../actions/dimensions_actions';

import { 
    RECEIVE_MISSIVES_ERRORS,
    RECEIVE_MISSIVE
} from '../actions/missives_actions';

import { 
    RECEIVE_REALMS_ERRORS,
    RECEIVE_REALM,
    REMOVE_REALM
} from '../actions/realms_actions';

import { 
    RECEIVE_ROLES_ERRORS,
    RECEIVE_ROLE,
    REMOVE_ROLE
} from '../actions/roles_actions';

import { 
    RECEIVE_SESSION_ERRORS, 
    RECEIVE_SESSION, 
    REMOVE_SESSION 
} from '../actions/session_actions';

const _defaultState = {
    beings: [],
    dimensionBeings: [],
    dimensions: [],
    missives: [],
    roles: [],
    session: []
}

export default (state=_defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BEINGS_ERRORS:
            return { ...state, beings: action.beings };
        case RECEIVE_BEING:
        case RECEIVE_BEINGS:
        case REMOVE_BEING:
            return { ...state, beings: [] };

        case RECEIVE_DIMENSION_BEINGS_ERRORS:
            return { ...state, dimensionBeings: action.dimensionBeings }
        case RECEIVE_DIMENSION_BEING:
        case REMOVE_DIMENSION_BEING:
            return { ...state, dimensionBeings: [] }

        case RECEIVE_DIMENSIONS_ERRORS:
            return { ...state, dimensions: action.dimensions }
        case RECEIVE_DIMENSION:
        case RECEIVE_DIMENSIONS:
        case REMOVE_DIMENSION:
            return { ...state, dimensions: [] }

        case RECEIVE_MISSIVES_ERRORS:
            return { ...state, missives: action.missives }
        case RECEIVE_MISSIVE:
            return { ...state, missives: [] }

        case RECEIVE_REALMS_ERRORS:
            return { ...state, realms: action.realms }
        case RECEIVE_REALM:
        case REMOVE_REALM:
            return { ...state, realms: [] }

        case RECEIVE_ROLES_ERRORS:
            return { ...state, roles: action.roles }
        case RECEIVE_ROLE:
        case REMOVE_ROLE:
            return { ...state, roles: [] }

        case RECEIVE_SESSION_ERRORS:
            return { ...state, session: action.session };
        case RECEIVE_SESSION:
        case REMOVE_SESSION:
            return { ...state, session: [] };
        default:
            return state;
    }
}