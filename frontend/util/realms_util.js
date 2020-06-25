export const fetchRealm = (realmId) => (
    $.ajax({
        method: "GET",
        url: `/api/realms/${ realmId }`,
        dataType: "json"
    })
);

export const createRealm = (realm) => (
    $.ajax({
        method: "POST",
        url: "/api/realms",
        data: { realm },
        dataType: "json"
    })
);

export const deleteRealm = (realmId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/realms/${ realmId }`,
        dataType: "json"
    })
);

export const updateRealm = (realm) => (
    $.ajax({
        method: "PATCH",
        url: `/api/realms/${ realm.id }`,
        data: { realm },
        dataType: "json"
    })
);