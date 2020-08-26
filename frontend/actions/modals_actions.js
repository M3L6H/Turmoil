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

export const RECEIVE_EDIT_REALM_MODAL = "RECEIVE_EDIT_REALM_MODAL";

export const receiveEditRealmModal = (open) => ({
  type: RECEIVE_EDIT_REALM_MODAL,
  modal: {
    open
  }
});

export const RECEIVE_FRIENDS_MODAL = "RECEIVE_FRIENDS_MODAL";

export const receiveFriendsModal = (open) => ({
  type: RECEIVE_FRIENDS_MODAL,
  modal: {
    open
  }
});

export const RECEIVE_REALM_MODAL = "RECEIVE_REALM_MODAL";

export const receiveRealmModal = (open) => ({
  type: RECEIVE_REALM_MODAL,
  modal: {
    open
  }
});

export const RECEIVE_SUMMONS_MODAL = "RECEIVE_SUMMONS_MODAL";

export const receiveSummonsModal = (open, formType="new") => ({
  type: RECEIVE_SUMMONS_MODAL,
  modal: {
    open,
    formType
  }
});
