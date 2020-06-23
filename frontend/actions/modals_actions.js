export const RECEIVE_AUTH_MODAL = "RECEIVE_AUTH_MODAL";

export const receiveAuthModal = (open, formType) => ({
    type: RECEIVE_AUTH_MODAL,
    open, 
    formType
});
