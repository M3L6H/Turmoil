import { fetchRealm } from './realms_actions';

export const RECEIVE_SELECTED_REALM = "RECEIVE_SELECTED_REALM";

export const receiveSelectedRealm = (selected) => ({
   type: RECEIVE_SELECTED_REALM,
   selected 
});

export const selectRealm = selected => dispatch => {
    dispatch(fetchRealm(selected))
        .then(dispatch(receiveSelectedRealm(selected)));
};
