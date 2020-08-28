import * as ComradesUtil from "../util/comrades_util";

export const RECEIVE_COMRADE = "RECEIVE_COMRADE";
export const REMOVE_COMRADE = "REMOVE_COMRADE";
export const RECEIVE_COMRADES_ERRORS = "RECEIVE_COMRADES_ERRORS";

const receiveComrade = (comrade) => ({
  type: RECEIVE_COMRADE,
  comrade
});

const removeComrade = (data) => ({
  type: REMOVE_COMRADE,
  ...data
});

const receiveComradesErrors = (errors) => ({
  type: RECEIVE_COMRADES_ERRORS,
  comrades: errors
});

export const createComrade = comrade => dispatch => (
  ComradesUtil.createComrade(comrade)
    .then(res => dispatch(receiveComrade(res)))
    .fail(jqXHR => dispatch(receiveComradesErrors(jqXHR.responseJSON)))
);

export const deleteComrade = comradeId => dispatch => (
  ComradesUtil.deleteComrade(comradeId)
    .then(res => dispatch(removeComrade(res)))
    .fail(jqXHR => dispatch(receiveComradesErrors(jqXHR.responseJSON)))
);

export const updateComrade = comrade => dispatch => (
  ComradesUtil.updateComrade(comrade)
    .then(res => dispatch(receiveComrade(res)))
    .fail(jqXHR => dispatch(receiveComradesErrors(jqXHR.responseJSON)))
);
