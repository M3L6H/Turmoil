export const createSession = (session) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { session },
        dataType: "json"
    })
);

export const deleteSession = (sessionId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/session/${ sessionId }`,
        dataType: "json"
    })
);