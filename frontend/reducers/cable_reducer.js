import { RECEIVE_CABLE } from '../actions/cable_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CABLE:
            return action.cable;
        default:
            return state;
    }
};