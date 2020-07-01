import { RECEIVE_ROLE, REMOVE_ROLE } from '../actions/roles_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROLE:
            return { ...state, [action.role.id]: action.role };
        case REMOVE_SESSION:
            return {};
        case REMOVE_ROLE:
            const newState = Object.assign({}, state);
            delete newState[action.roleId];
            return newState;
        default:
            return state;
    }
};