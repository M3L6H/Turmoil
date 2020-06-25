import { RECEIVE_CLUSTER, REMOVE_CLUSTER } from '../actions/clusters_actions';
import { RECEIVE_DIMENSION } from '../actions/dimensions_actions';

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DIMENSION:
            return action.clusters;
        case RECEIVE_CLUSTER:
            return { ...state, [action.cluster.id]: action.cluster };
        case REMOVE_CLUSTER:
            const newState = Object.assign({}, state);
            delete newState[action.clusterId];
            return newState;
        default:
            return state;
    }
};