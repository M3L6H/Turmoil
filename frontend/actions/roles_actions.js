import * as RolesUtil from "../util/roles_util";

export const RECEIVE_ROLE = "RECEIVE_ROLE";
export const REMOVE_ROLE = "REMOVE_ROLE";
export const RECEIVE_ROLES_ERRORS = "RECEIVE_ROLES_ERRORS";

const receiveRole = (role) => ({
    type: RECEIVE_ROLE,
    role 
});

const removeRole = (roleId) => ({
    type: REMOVE_ROLE,
    roleId
});

const receiveRolesErrors = (errors) => ({
    type: RECEIVE_ROLES_ERRORS,
    roles: errors
});

export const fetchRole = roleId => dispatch => (
    RolesUtil.fetchRole(roleId)
        .then(res => dispatch(receiveRole(res)))
        .fail(jqXHR => receiveRolesErrors(jqXHR.responseJSON))
);

export const createRole = (role, dimensionId) => dispatch => (
    RolesUtil.createRole(role, dimensionId)
        .then(res => dispatch(receiveRole(res)))
        .fail(jqXHR => receiveRolesErrors(jqXHR.responseJSON))
);

export const deleteRole = roleId => dispatch => (
    RolesUtil.deleteRole(roleId)
        .then(res => dispatch(removeRole(res)))
        .fail(jqXHR => receiveRolesErrors(jqXHR.responseJSON))
);

export const updateRole = role => dispatch => (
    RolesUtil.updateRole(role)
        .then(res => dispatch(receiveRole(res)))
        .fail(jqXHR => receiveRolesErrors(jqXHR.responseJSON))
);
