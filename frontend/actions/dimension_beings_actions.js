import * as DimensionBeingsUtil from "../util/dimension_beings_util";

export const RECEIVE_DIMENSION_BEING = "RECEIVE_DIMENSION_BEING";
export const REMOVE_DIMENSION_BEING = "REMOVE_DIMENSION_BEING";
export const RECEIVE_DIMENSION_BEINGS_ERRORS = "RECEIVE_DIMENSION_BEINGS_ERRORS";

const receiveDimensionBeing = (dimensionBeing) => ({
    type: RECEIVE_DIMENSION_BEING,
    dimensionBeing 
});

const removeDimensionBeing = (dimensionBeingId) => ({
    type: REMOVE_DIMENSION_BEING,
    dimensionBeingId
});

const receiveDimensionBeingsErrors = (errors) => ({
    type: RECEIVE_DIMENSION_BEINGS_ERRORS,
    dimensionBeings: errors
});

export const fetchDimensionBeing = dimensionBeingId => dispatch => (
    DimensionBeingsUtil.fetchDimensionBeing(dimensionBeingId)
        .then(res => dispatch(receiveDimensionBeing(res)))
        .fail(jqXHR => dispatch(receiveDimensionBeingsErrors(jqXHR.responseJSON)))
);

export const createDimensionBeing = (dimensionBeing, dimensionId) => dispatch => (
    DimensionBeingsUtil.createDimensionBeing(dimensionBeing, dimensionId)
        .then(res => dispatch(receiveDimensionBeing(res)))
        .fail(jqXHR => dispatch(receiveDimensionBeingsErrors(jqXHR.responseJSON)))
);

export const deleteDimensionBeing = dimensionBeingId => dispatch => (
    DimensionBeingsUtil.deleteDimensionBeing(dimensionBeingId)
        .then(res => dispatch(removeDimensionBeing(res)))
        .fail(jqXHR => dispatch(receiveDimensionBeingsErrors(jqXHR.responseJSON)))
);

export const updateDimensionBeing = dimensionBeing => dispatch => (
    DimensionBeingsUtil.updateDimensionBeing(dimensionBeing)
        .then(res => dispatch(receiveDimensionBeing(res)))
        .fail(jqXHR => dispatch(receiveDimensionBeingsErrors(jqXHR.responseJSON)))
);
