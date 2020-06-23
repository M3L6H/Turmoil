export const createSession = (being) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { being },
        dataType: "json"
    })
);

export const deleteSession = () => (
    $.ajax({
        method: "DELETE",
        url: `/api/session`,
        dataType: "json"
    })
);