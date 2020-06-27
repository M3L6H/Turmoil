import { clearClusters } from './clusters_actions';
import { fetchDimension } from './dimensions_actions';
import { clearRealms } from './realms_actions';

export const RECEIVE_SELECTED_DIMENSION = "RECEIVE_SELECTED_DIMENSION";

export const receiveSelectedDimension = (selected) => ({
   type: RECEIVE_SELECTED_DIMENSION,
   selected 
});

export const selectDimension = selected => dispatch => {
    if (selected !== "dms") {
        dispatch(fetchDimension(selected))
            .then(dispatch(receiveSelectedDimension(selected)));
    } else {
        dispatch(receiveSelectedDimension(selected));
        dispatch(clearClusters());
        dispatch(clearRealms());
    }
};
