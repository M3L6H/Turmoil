import * as BeingsUtil from "../util/beings_util";

export const RECEIVE_BEINGS = "RECEIVE_BEINGS";
export const RECEIVE_BEING = "RECEIVE_BEING";
export const REMOVE_BEING = "REMOVE_BEING";
export const RECEIVE_BEINGS_ERRORS = "RECEIVE_BEINGS_ERRORS";

const receiveBeings = (beings) => ({
  type: RECEIVE_BEINGS,
  beings 
});

const receiveBeing = ({ being, dimensions, comrades, comradeBeings }) => ({
  type: RECEIVE_BEING,
  being,
  dimensions,
  beingId: being.id,
  comrades,
  comradeBeings
});

const removeBeing = (beingId) => ({
  type: REMOVE_BEING,
  beingId
});

const receiveBeingsErrors = (errors) => ({
  type: RECEIVE_BEINGS_ERRORS,
  beings: errors
});

export const fetchBeings = (search) => dispatch => (
  BeingsUtil.fetchBeings(search)
    .then(res => dispatch(receiveBeings(res)))
    .fail(jqXHR => dispatch(receiveBeingsErrors(jqXHR.responseJSON)))
);

export const fetchBeing = (beingId) => dispatch => (
  BeingsUtil.fetchBeing(beingId)
    .then(res => dispatch(receiveBeing(res)))
    .fail(jqXHR => dispatch(receiveBeingsErrors(jqXHR.responseJSON)))
);

export const createBeing = (being) => dispatch => (
  BeingsUtil.createBeing(being)
    .then(res => {
      dispatch(receiveBeing(res));
    })
    .fail(jqXHR => dispatch(receiveBeingsErrors(jqXHR.responseJSON)))
);

export const deleteBeing = (beingId) => dispatch => (
  BeingsUtil.deleteBeing(beingId)
    .then(res => dispatch(removeBeing(res)))
    .fail(jqXHR => dispatch(receiveBeingsErrors(jqXHR.responseJSON)))
);

export const updateBeing = (being) => dispatch => (
  BeingsUtil.updateBeing(being)
    .then(res => dispatch(receiveBeing(res)))
    .fail(jqXHR => dispatch(receiveBeingsErrors(jqXHR.responseJSON)))
);
