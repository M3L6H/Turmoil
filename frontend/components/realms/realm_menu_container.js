import { connect } from 'react-redux';

import RealmMenu from './realm_menu';

import { deleteCluster } from '../../actions/clusters_actions';
import { receiveContent } from '../../actions/content_actions';
import { receiveContext } from '../../actions/context_menu_actions';
import { 
  receiveClusterModal, 
  receiveRealmModal, 
  receiveSummonsModal, 
  receiveEditRealmModal
} from '../../actions/modals_actions';
import { receiveDashboardSelection } from '../../actions/dashboard_actions';
import { deleteDimension, updateOrder } from '../../actions/dimensions_actions';
import { selectDimension } from '../../actions/dimension_menu_actions';
import { receiveHeader } from '../../actions/header_actions';
import { deleteRealm } from '../../actions/realms_actions';
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
  selectDimension: selected => dispatch(selectDimension(selected)),
  updateOrder: (dimensionId, data) => dispatch(updateOrder(dimensionId, data)),
  openClusterForm: () => dispatch(receiveClusterModal(true)),
  openRealmForm: () => dispatch(receiveRealmModal(true)),
  openEditRealmForm: () => dispatch(receiveEditRealmModal(true)),
  openSummonsForm: () => dispatch(receiveSummonsModal(true)),
  setUpContextMenu: (items, name) => dispatch(receiveContext(items, name)),
  deleteCluster: (id) => dispatch(deleteCluster(id)),
  deleteRealm: (id) => dispatch(deleteRealm(id)),
  deleteDimension: (id) => dispatch(deleteDimension(id)),
  receiveDashboardSelection: (dashboard) => dispatch(receiveDashboardSelection(dashboard)),
  receiveHeader: (header) => dispatch(receiveHeader(header)),
  receiveContent: (content) => dispatch(receiveContent(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmMenu);