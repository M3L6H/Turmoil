import { connect } from 'react-redux';

import { receiveFriendsModal } from '../../actions/modals_actions';

import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = (state) => ({
  friendsModal: state.ui.modals.friends
});

const mapDispatchToProps = (dispatch) => ({
  receiveFriendsModal: (open) => dispatch(receiveFriendsModal(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
