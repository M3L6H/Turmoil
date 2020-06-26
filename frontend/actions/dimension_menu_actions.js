import { fetchDimension } from './dimensions_actions';

export const RECEIVE_SELECTED_DIMENSION = "RECEIVE_SELECTED_DIMENSION";

export const receiveSelectedDimension = (selected) => ({
   type: RECEIVE_SELECTED_DIMENSION,
   selected 
});

export const selectDimension = selected => dispatch => {
    dispatch(fetchDimension(selected))
        .then(dispatch(receiveSelectedDimension(selected)));
};
