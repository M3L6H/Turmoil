import * as BeingsUtil from "../util/beings_util";

export const RECEIVE_BEINGS = "RECEIVE_BEINGS";
export const RECEIVE_BEING = "RECEIVE_BEING";
export const REMOVE_BEING = "REMOVE_BEING";
export const RECEIVE_BEINGS_ERRORS = "RECEIVE_BEINGS_ERRORS";

const receiveBeings = (beings) => ({
    type: RECEIVE_BEINGS,
    beings 
});

const receiveBeing = (being) => ({
    type: RECEIVE_BEING,
    being 
});

const removeBeing = (beingId) => ({
    type: REMOVE_BEING,
    beingId
});

const receiveBeingsErrors = (errors) => ({
    type: RECEIVE_BEINGS_ERRORS,
    errors
});

export const fetchBeings = () => (
    BeingsUtil.fetchBeings()
        .then(res => receiveBeings(res))
        .fail(jqXHR => receiveBeingsErrors(jqXHR.responseJSON))
);

export const fetchBeing = (beingId) => (
    BeingsUtil.fetchBeing(beingId)
        .then(res => receiveBeing(res))
        .fail(jqXHR => receiveBeingsErrors(jqXHR.responseJSON))
);

export const createBeing = (being) => (
    BeingsUtil.createBeing(being)
        .then(res => receiveBeing(res))
        .fail(jqXHR => receiveBeingsErrors(jqXHR.responseJSON))
);

export const deleteBeing = (beingId) => (
    BeingsUtil.deleteBeing(beingId)
        .then(res => removeBeing(res))
        .fail(jqXHR => receiveBeingsErrors(jqXHR.responseJSON))
);

export const updateBeing = (being) => (
    BeingsUtil.updateBeing(being)
        .then(res => receiveBeing(res))
        .fail(jqXHR => receiveBeingsErrors(jqXHR.responseJSON))
);
