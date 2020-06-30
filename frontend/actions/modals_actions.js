export const RECEIVE_AUTH_MODAL = "RECEIVE_AUTH_MODAL";

export const receiveAuthModal = (open, formType="signIn") => ({
    type: RECEIVE_AUTH_MODAL,
    modal: {
        open, 
        formType
    }
});

export const RECEIVE_CLUSTER_MODAL = "RECEIVE_CLUSTER_MODAL";

export const receiveClusterModal = (open) => ({
    type: RECEIVE_CLUSTER_MODAL,
    modal: {
        open
    } 
});

export const RECEIVE_DIMENSION_MODAL = "RECEIVE_DIMENSION_MODAL";

export const receiveDimensionModal = (open) => ({
    type: RECEIVE_DIMENSION_MODAL,
    modal: {
        open
    } 
});
