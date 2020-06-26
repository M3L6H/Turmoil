import { connect } from 'react-redux';

import RealmMenu from './realm_menu';

import { updateCluster } from '../../actions/clusters_actions';
import { updateRealm } from '../../actions/realms_actions';
import { selectRealm } from '../../actions/realm_menu_actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dimension: state.entities.dimensions[state.ui.menus.dimensionMenu.selected],
    clusters: state.entities.clusters,
    realms: state.entities.realms
});

const mapDispatchToProps = (dispatch) => ({
    select: selected => dispatch(selectRealm(selected)),
    updateOrder: (orderables) => orderables.forEach(orderable => {
        if (orderable.type === "Cluster") {
            dispatch(updateCluster(orderable));
        } else {
            dispatch(updateRealm(orderable))
        }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmMenu);