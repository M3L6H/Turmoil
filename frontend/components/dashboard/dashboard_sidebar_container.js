import { connect } from 'react-redux';

import { receiveDashboardSelection } from '../../actions/dashboard_actions';
import { receiveHeader } from '../../actions/header_actions';
import { receiveSidebar } from '../../actions/sidebar_actions';
import { deleteSession } from '../../actions/session_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = ({ ui: { dashboard } }) => ({
  dashboard
});

const mapDispatchToProps = (dispatch) => ({
  receiveDashboardSelection: (dashboard) => dispatch(receiveDashboardSelection(dashboard)),
  receiveHeader: (header) => dispatch(receiveHeader(header)),
  closeSidebar: () => dispatch(receiveSidebar({ open: false })),
  signOut: () => dispatch(deleteSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
