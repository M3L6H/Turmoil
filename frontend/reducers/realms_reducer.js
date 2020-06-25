import { RECEIVE_REALM, REMOVE_REALM } from '../actions/realms_actions';

import { RECEIVE_DIMENSION } from '../actions/dimensions_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DIMENSION:
            return action.realms;
        case RECEIVE_REALM:
            return { ...state, [action.realm.id]: action.realm };
        case REMOVE_REALM:
            const newState = Object.assign({}, state);
            delete newState[action.realmId];
            return newState;
        default:
            return state;
    }
};