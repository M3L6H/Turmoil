export const createMissive = (missive) => (
    $.ajax({
        method: "POST",
        url: "/api/missives",
        data: { missive },
        dataType: "json"
    })
);

export const updateMissive = (missive) => (
    $.ajax({
        method: "PATCH",
        url: `/api/missives/${ missive.id }`,
        data: { missive },
        dataType: "json"
    })
);