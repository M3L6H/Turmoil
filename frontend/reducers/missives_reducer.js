import { CLEAR_MISSIVES, RECEIVE_MISSIVE } from '../actions/missives_actions';

import { RECEIVE_REALM } from '../actions/realms_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case CLEAR_MISSIVES:
            return {};
        case RECEIVE_REALM:
            return action.missives || {};
        case RECEIVE_MISSIVE:
            return { ...state, [action.missive.id]: action.missive };
        default:
            return state;
    }
};