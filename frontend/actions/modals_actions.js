export const RECEIVE_AUTH_MODAL = "RECEIVE_AUTH_MODAL";

export const receiveAuthModal = (open, formType="signIn") => ({
    type: RECEIVE_AUTH_MODAL,
    modal: {
        open, 
        formType
    }
});
