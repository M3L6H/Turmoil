export const fetchDimensions = () => (
    $.ajax({
        method: "GET",
        url: "/api/dimensions",
        dataType: "json"
    }) 
);

export const fetchDimension = (dimensionId) => (
    $.ajax({
        method: "GET",
        url: `/api/dimensions/${ dimensionId }`,
        dataType: "json"
    })
);

export const createDimension = (dimension) => (
    $.ajax({
        method: "POST",
        url: "/api/dimensions",
        data: { dimension },
        dataType: "json"
    })
);

export const deleteDimension = (dimensionId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/dimensions/${ dimensionId }`,
        dataType: "json"
    })
);

export const updateDimension = (dimension) => (
    $.ajax({
        method: "PATCH",
        url: `/api/dimensions/${ dimension.id }`,
        data: { dimension },
        dataType: "json"
    })
);