import * as SummonsesUtil from "../util/summonses_util";

export const RECEIVE_SUMMONS = "RECEIVE_SUMMONS";
export const REMOVE_SUMMONS = "REMOVE_SUMMONS";
export const RECEIVE_SUMMONSES_ERRORS = "RECEIVE_SUMMONSES_ERRORS";

const receiveSummons = (data) => ({
    type: RECEIVE_SUMMONS,
    ...data
});

const removeSummons = (summonsId) => ({
    type: REMOVE_SUMMONS,
    summonsId
});

const receiveSummonsesErrors = (errors) => ({
    type: RECEIVE_SUMMONSES_ERRORS,
    summonses: errors
});

export const createSummons = summons => dispatch => (
    SummonsesUtil.createSummons(summons)
        .then(res => dispatch(receiveSummons(res)))
        .fail(jqXHR => receiveSummonsesErrors(jqXHR.responseJSON))
);

export const deleteSummons = summonsId => dispatch => (
    SummonsesUtil.deleteSummons(summonsId)
        .then(res => dispatch(removeSummons(res)))
        .fail(jqXHR => receiveSummonsesErrors(jqXHR.responseJSON))
);

export const updateSummons = summons => dispatch => (
    SummonsesUtil.updateSummons(summons)
        .then(res => dispatch(receiveSummons(res)))
        .fail(jqXHR => receiveSummonsesErrors(jqXHR.responseJSON))
);
