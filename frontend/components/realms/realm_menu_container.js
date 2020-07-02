import { connect } from 'react-redux';

import RealmMenu from './realm_menu';

import { receiveContext } from '../../actions/context_menu_actions';

import { 
    receiveClusterModal, 
    receiveRealmModal, 
    receiveSummonsModal 
} from '../../actions/modals_actions';
import { updateOrder } from '../../actions/dimensions_actions';
import { selectRealm } from '../../actions/realm_menu_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dimension: state.entities.dimensions[state.ui.menus.dimensionMenu.selected],
    clusters: state.entities.clusters,
    realms: state.entities.realms
});

const mapDispatchToProps = (dispatch) => ({
    closeSidebar: () => dispatch(receiveSidebar({ open: false })),
    select: selected => dispatch(selectRealm(selected)),
    updateOrder: (dimensionId, data) => dispatch(updateOrder(dimensionId, data)),
    openClusterForm: () => dispatch(receiveClusterModal(true)),
    openRealmForm: () => dispatch(receiveRealmModal(true)),
    openSummonsForm: () => dispatch(receiveSummonsModal(true)),
    setUpContextMenu: (items, name) => dispatch(receiveContext(items, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmMenu);