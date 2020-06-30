import { connect } from 'react-redux';

import RealmMenu from './realm_menu';

import { 
    receiveClusterModal, 
    receiveRealmModal, 
    receiveSummonsModal 
} from '../../actions/modals_actions';
import { updateOrder } from '../../actions/dimensions_actions';
import { selectRealm } from '../../actions/realm_menu_actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dimension: state.entities.dimensions[state.ui.menus.dimensionMenu.selected],
    clusters: state.entities.clusters,
    realms: state.entities.realms
});

const mapDispatchToProps = (dispatch) => ({
    select: selected => dispatch(selectRealm(selected)),
    updateOrder: (dimensionId, data) => dispatch(updateOrder(dimensionId, data)),
    openClusterForm: () => dispatch(receiveClusterModal(true)),
    openRealmForm: () => dispatch(receiveRealmModal(true)),
    openSummonsForm: () => dispatch(receiveSummonsModal(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmMenu);