export const fetchDimensionBeing = (dimensionBeingId) => (
    $.ajax({
        method: "GET",
        url: `/api/dimension_beings/${ dimensionBeingId }`,
        dataType: "json"
    })
);

export const createDimensionBeing = (dimensionBeing, dimensionId) => (
    $.ajax({
        method: "POST",
        url: `/api/dimensions/${ dimensionId }/dimension_beings`,
        data: { dimensionBeing },
        dataType: "json"
    })
);

export const deleteDimensionBeing = (dimensionBeingId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/dimension_beings/${ dimensionBeingId }`,
        dataType: "json"
    })
);

export const updateDimensionBeing = (dimensionBeing) => (
    $.ajax({
        method: "PATCH",
        url: `/api/dimension_beings/${ dimensionBeing.id }`,
        data: { dimensionBeing },
        dataType: "json"
    })
);
