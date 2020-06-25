export const createCluster = (cluster) => (
    $.ajax({
        method: "POST",
        url: "/api/clusters",
        data: { cluster },
        dataType: "json"
    })
);

export const deleteCluster = (clusterId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/clusters/${ clusterId }`,
        dataType: "json"
    })
);

export const updateCluster = (cluster) => (
    $.ajax({
        method: "PATCH",
        url: `/api/clusters/${ cluster.id }`,
        data: { cluster },
        dataType: "json"
    })
);