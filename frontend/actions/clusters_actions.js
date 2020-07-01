import * as ClustersUtil from "../util/clusters_util";

export const CLEAR_CLUSTERS = "CLEAR_CLUSTERS";
export const RECEIVE_CLUSTER = "RECEIVE_CLUSTER";
export const REMOVE_CLUSTER = "REMOVE_CLUSTER";
export const RECEIVE_CLUSTERS_ERRORS = "RECEIVE_CLUSTERS_ERRORS";

export const clearClusters = () => ({
    type: CLEAR_CLUSTERS 
});

const receiveCluster = (cluster) => ({
    type: RECEIVE_CLUSTER,
    cluster
});

const removeCluster = (clusterId) => ({
    type: REMOVE_CLUSTER,
    clusterId
});

const receiveClustersErrors = (errors) => ({
    type: RECEIVE_CLUSTERS_ERRORS,
    clusters: errors
});

export const createCluster = cluster => dispatch => (
    ClustersUtil.createCluster(cluster)
        .then(res => dispatch(receiveCluster(res)))
        .fail(jqXHR => dispatch(receiveClustersErrors(jqXHR.responseJSON)))
);

export const deleteCluster = clusterId => dispatch => (
    ClustersUtil.deleteCluster(clusterId)
        .then(res => dispatch(removeCluster(res)))
        .fail(jqXHR => dispatch(receiveClustersErrors(jqXHR.responseJSON)))
);

export const updateCluster = cluster => dispatch => (
    ClustersUtil.updateCluster(cluster)
        .then(res => dispatch(receiveCluster(res)))
        .fail(jqXHR => dispatch(receiveClustersErrors(jqXHR.responseJSON)))
);
