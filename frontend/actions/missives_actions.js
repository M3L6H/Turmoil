import * as MissivesUtil from "../util/missives_util";

export const CLEAR_MISSIVES = "CLEAR_MISSIVES";
export const RECEIVE_MISSIVE = "RECEIVE_MISSIVE";
export const RECEIVE_MISSIVES_ERRORS = "RECEIVE_MISSIVES_ERRORS";

export const clearMissives = () => ({
    type: CLEAR_MISSIVES 
});

const receiveMissive = ({ missive }) => ({
    type: RECEIVE_MISSIVE,
    missive
});

const receiveMissivesErrors = (errors) => ({
    type: RECEIVE_MISSIVES_ERRORS,
    missives: errors
});

export const createMissive = missive => dispatch => (
    MissivesUtil.createMissive(missive)
        .then(res => dispatch(receiveMissive(res)))
        .fail(jqXHR => receiveMissivesErrors(jqXHR.responseJSON))
);

export const updateMissive = missive => dispatch => (
    MissivesUtil.updateMissive(missive)
        .then(res => dispatch(receiveMissive(res)))
        .fail(jqXHR => receiveMissivesErrors(jqXHR.responseJSON))
);
