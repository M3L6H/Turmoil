export const createSummons = (summons) => (
    $.ajax({
        method: "POST",
        url: "/api/summonses",
        data: { summons },
        dataType: "json"
    })
);

export const deleteSummons = (summonsId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/summonses/${ summonsId }`,
        dataType: "json"
    })
);

export const updateSummons = (summons) => (
    $.ajax({
        method: "PATCH",
        url: `/api/summonses/${ summons.id }`,
        data: { summons },
        dataType: "json"
    })
);
