import { connect } from 'react-redux';

import { receiveHeader } from '../../actions/header_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapDispatchToProps = (dispatch) => ({
  receiveHeader: (header) => dispatch(receiveHeader(header))
});

export default connect(null, mapDispatchToProps)(DashboardSidebar);
