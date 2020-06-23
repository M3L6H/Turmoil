import * as DimensionsUtil from "../util/dimensions_util";

export const RECEIVE_DIMENSIONS = "RECEIVE_DIMENSIONS";
export const RECEIVE_DIMENSION = "RECEIVE_DIMENSION";
export const REMOVE_DIMENSION = "REMOVE_DIMENSION";
export const RECEIVE_DIMENSIONS_ERRORS = "RECEIVE_DIMENSIONS_ERRORS";

const receiveDimensions = (dimensions) => ({
    type: RECEIVE_DIMENSIONS,
    dimensions 
});

const receiveDimension = (dimension) => ({
    type: RECEIVE_DIMENSION,
    dimension 
});

const removeDimension = (dimensionId) => ({
    type: REMOVE_DIMENSION,
    dimensionId
});

const receiveDimensionsErrors = (errors) => ({
    type: RECEIVE_DIMENSIONS_ERRORS,
    dimensions: errors
});

export const fetchDimensions = () => dispatch => (
    DimensionsUtil.fetchDimensions()
        .then(res => dispatch(receiveDimensions(res)))
        .fail(jqXHR => receiveDimensionsErrors(jqXHR.responseJSON))
);

export const fetchDimension = dimensionId => dispatch => (
    DimensionsUtil.fetchDimension(dimensionId)
        .then(res => dispatch(receiveDimension(res)))
        .fail(jqXHR => receiveDimensionsErrors(jqXHR.responseJSON))
);

export const createDimension = dimension => dispatch => (
    DimensionsUtil.createDimension(dimension)
        .then(res => dispatch(receiveDimension(res)))
        .fail(jqXHR => receiveDimensionsErrors(jqXHR.responseJSON))
);

export const deleteDimension = dimensionId => dispatch => (
    DimensionsUtil.deleteDimension(dimensionId)
        .then(res => dispatch(removeDimension(res)))
        .fail(jqXHR => receiveDimensionsErrors(jqXHR.responseJSON))
);

export const updateDimension = dimension => dispatch => (
    DimensionsUtil.updateDimension(dimension)
        .then(res => dispatch(receiveDimension(res)))
        .fail(jqXHR => receiveDimensionsErrors(jqXHR.responseJSON))
);
