export const fetchRole = (roleId) => (
    $.ajax({
        method: "GET",
        url: `/api/roles/${ roleId }`,
        dataType: "json"
    })
);

export const createRole = (role, dimensionId) => (
    $.ajax({
        method: "POST",
        url: `/api/dimensions/${ dimensionId }/roles`,
        data: { role },
        dataType: "json"
    })
);

export const deleteRole = (roleId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/roles/${ roleId }`,
        dataType: "json"
    })
);

export const updateRole = (role) => (
    $.ajax({
        method: "PATCH",
        url: `/api/roles/${ role.id }`,
        data: { role },
        dataType: "json"
    })
);
