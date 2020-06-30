import { connect } from 'react-redux';

import { createCluster } from '../../actions/clusters_actions';
import { receiveClusterModal } from '../../actions/modals_actions';

import ClusterForm from './cluster_form';

const mapStateToProps = (state, ownProps) => ({
    dimensionId: state.ui.menus.dimensionMenu.selected,
    open: state.ui.modals.clusters.open,
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    createCluster: cluster => dispatch(createCluster(cluster)),
    closeForm: () => dispatch(receiveClusterModal(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClusterForm);